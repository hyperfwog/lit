/**
 * WebSocket client for the Lighter API
 */

import { NetworkType, getNetworkConfig } from './config';

/**
 * WebSocket client options
 */
export interface WsClientOptions {
  /**
   * Network type
   */
  network?: NetworkType;
  
  /**
   * Base URL for the WebSocket connection (overrides network)
   */
  baseUrl?: string;
  
  /**
   * Path for the WebSocket connection
   */
  path?: string;
  
  /**
   * Order book IDs to subscribe to
   */
  orderBookIds?: number[];
  
  /**
   * Account IDs to subscribe to
   */
  accountIds?: number[];
  
  /**
   * Callback for order book updates
   */
  onOrderBookUpdate?: (marketId: number, orderBook: any) => void;
  
  /**
   * Callback for account updates
   */
  onAccountUpdate?: (accountId: number, account: any) => void;
}

/**
 * WebSocket client for the Lighter API
 */
export class WsClient {
  private baseUrl: string;
  private path: string;
  private subscriptions: {
    orderBooks: number[];
    accounts: number[];
  };
  private ws: WebSocket | null = null;
  private orderBookStates: Record<string, any> = {};
  private accountStates: Record<string, any> = {};
  private onOrderBookUpdate: (marketId: number, orderBook: any) => void;
  private onAccountUpdate: (accountId: number, account: any) => void;

  /**
   * Constructor
   * @param options - WebSocket client options
   */
  constructor(options: WsClientOptions = {}) {
    const networkConfig = getNetworkConfig(options.network);
    const baseUrl = options.baseUrl || networkConfig.wsUrl;
    this.baseUrl = baseUrl;
    this.path = options.path || '';
    
    this.subscriptions = {
      orderBooks: options.orderBookIds || [],
      accounts: options.accountIds || [],
    };
    
    if (this.subscriptions.orderBooks.length === 0 && this.subscriptions.accounts.length === 0) {
      throw new Error('No subscriptions provided.');
    }
    
    this.onOrderBookUpdate = options.onOrderBookUpdate || console.log;
    this.onAccountUpdate = options.onAccountUpdate || console.log;
  }

  /**
   * Run the WebSocket client
   */
  public run(): void {
    this.ws = new WebSocket(this.baseUrl);
    
    this.ws.onopen = () => {
      this.handleConnected();
    };
    
    this.ws.onmessage = (event) => {
      this.onMessage(event.data);
    };
    
    this.ws.onerror = (error) => {
      throw new Error(`WebSocket error: ${error}`);
    };
    
    this.ws.onclose = (event) => {
      throw new Error(`WebSocket closed: ${event.code} ${event.reason}`);
    };
  }

  /**
   * Close the WebSocket client
   */
  public close(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * Handle connected event
   */
  private handleConnected(): void {
    if (!this.ws) return;
    
    for (const marketId of this.subscriptions.orderBooks) {
      this.ws.send(
        JSON.stringify({ type: 'subscribe', channel: `order_book/${marketId}` })
      );
    }
    
    for (const accountId of this.subscriptions.accounts) {
      this.ws.send(
        JSON.stringify({ type: 'subscribe', channel: `account_all/${accountId}` })
      );
    }
  }

  /**
   * Handle incoming messages
   * @param data - Message data
   */
  private onMessage(data: any): void {
    const message = typeof data === 'string' ? JSON.parse(data) : data;
    const messageType = message.type;
    
    if (messageType === 'connected') {
      this.handleConnected();
    } else if (messageType === 'subscribed/order_book') {
      this.handleSubscribedOrderBook(message);
    } else if (messageType === 'update/order_book') {
      this.handleUpdateOrderBook(message);
    } else if (messageType === 'subscribed/account_all') {
      this.handleSubscribedAccount(message);
    } else if (messageType === 'update/account_all') {
      this.handleUpdateAccount(message);
    } else {
      throw new Error(`Unhandled message type: ${messageType}`);
    }
  }

  /**
   * Handle subscribed order book event
   * @param message - Message data
   */
  private handleSubscribedOrderBook(message: any): void {
    const marketId = message.channel.split(':')[1];
    this.orderBookStates[marketId] = message.order_book;
    this.onOrderBookUpdate(Number(marketId), this.orderBookStates[marketId]);
  }

  /**
   * Handle update order book event
   * @param message - Message data
   */
  private handleUpdateOrderBook(message: any): void {
    const marketId = message.channel.split(':')[1];
    this.updateOrderBookState(marketId, message.order_book);
    this.onOrderBookUpdate(Number(marketId), this.orderBookStates[marketId]);
  }

  /**
   * Update order book state
   * @param marketId - Market ID
   * @param orderBook - Order book data
   */
  private updateOrderBookState(marketId: string, orderBook: any): void {
    this.updateOrders(
      orderBook.asks,
      this.orderBookStates[marketId].asks
    );
    this.updateOrders(
      orderBook.bids,
      this.orderBookStates[marketId].bids
    );
  }

  /**
   * Update orders
   * @param newOrders - New orders
   * @param existingOrders - Existing orders
   */
  private updateOrders(newOrders: any[], existingOrders: any[]): void {
    for (const newOrder of newOrders) {
      let isNewOrder = true;
      for (let i = 0; i < existingOrders.length; i++) {
        const existingOrder = existingOrders[i];
        if (newOrder.price === existingOrder.price) {
          isNewOrder = false;
          existingOrder.size = newOrder.size;
          if (parseFloat(newOrder.size) === 0) {
            existingOrders.splice(i, 1);
          }
          break;
        }
      }
      if (isNewOrder && parseFloat(newOrder.size) > 0) {
        existingOrders.push(newOrder);
      }
    }
  }

  /**
   * Handle subscribed account event
   * @param message - Message data
   */
  private handleSubscribedAccount(message: any): void {
    const accountId = message.channel.split(':')[1];
    this.accountStates[accountId] = message;
    this.onAccountUpdate(Number(accountId), this.accountStates[accountId]);
  }

  /**
   * Handle update account event
   * @param message - Message data
   */
  private handleUpdateAccount(message: any): void {
    const accountId = message.channel.split(':')[1];
    this.accountStates[accountId] = message;
    this.onAccountUpdate(Number(accountId), this.accountStates[accountId]);
  }
}
