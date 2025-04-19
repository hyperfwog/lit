/**
 * Signer client for the Lighter API
 */

import { ethers } from 'ethers';
import { NetworkType, getNetworkConfig } from './config';
import { TransactionApi } from '../lighter-ts/src';

/**
 * Transaction constants
 */
export const CONSTANTS = {
  // Order types
  ORDER_TYPE_LIMIT: 0,
  ORDER_TYPE_MARKET: 1,
  ORDER_TYPE_STOP_LOSS: 2,
  ORDER_TYPE_STOP_LOSS_LIMIT: 3,
  ORDER_TYPE_TAKE_PROFIT: 4,
  ORDER_TYPE_TAKE_PROFIT_LIMIT: 5,
  
  // Order time in force
  ORDER_TIME_IN_FORCE_GOOD_TILL_TIME: 0,
  ORDER_TIME_IN_FORCE_IMMEDIATE_OR_CANCEL: 1,
  ORDER_TIME_IN_FORCE_POST_ONLY: 2,
  
  // Transaction types
  TX_TYPE_CREATE_ORDER: 14,
  TX_TYPE_CANCEL_ORDER: 15,
  TX_TYPE_CANCEL_ALL_ORDERS: 16,
  TX_TYPE_MODIFY_ORDER: 17,
  TX_TYPE_WITHDRAW: 13,
  TX_TYPE_TRANSFER: 12,
  TX_TYPE_CREATE_SUB_ACCOUNT: 9,
  TX_TYPE_CREATE_PUBLIC_POOL: 10,
  TX_TYPE_UPDATE_PUBLIC_POOL: 11,
  TX_TYPE_MINT_SHARES: 18,
  TX_TYPE_BURN_SHARES: 19,
  
  // Other constants
  USDC_TICKER_SCALE: 1e6,
  NIL_TRIGGER_PRICE: 0,
  DEFAULT_28_DAY_ORDER_EXPIRY: -1,
  DEFAULT_10_MIN_AUTH_EXPIRY: -1,
  MINUTE: 60,
};

/**
 * Transaction response
 */
export interface TxResponse {
  code: number;
  message: string;
  txHash: string;
}

/**
 * Signer client options
 */
export interface SignerClientOptions {
  network?: NetworkType;
  url?: string;
  privateKey: string;
  chainId?: number;
  apiKeyIndex?: number;
  accountIndex?: number;
}

/**
 * Create order transaction
 */
export class CreateOrder {
  accountIndex?: number;
  orderBookIndex?: number;
  baseAmount?: number;
  price?: number;
  isAsk?: number;
  orderType?: number;
  expiredAt?: number;
  nonce?: number;
  sig?: string;
  
  static fromJson(jsonStr: string): CreateOrder {
    const params = JSON.parse(jsonStr);
    const result = new CreateOrder();
    result.accountIndex = params.AccountIndex;
    result.orderBookIndex = params.OrderBookIndex;
    result.baseAmount = params.BaseAmount;
    result.price = params.Price;
    result.isAsk = params.IsAsk;
    result.orderType = params.OrderType;
    result.expiredAt = params.ExpiredAt;
    result.nonce = params.Nonce;
    result.sig = params.Sig;
    return result;
  }
  
  toJson(): string {
    return JSON.stringify({
      AccountIndex: this.accountIndex,
      OrderBookIndex: this.orderBookIndex,
      BaseAmount: this.baseAmount,
      Price: this.price,
      IsAsk: this.isAsk,
      OrderType: this.orderType,
      ExpiredAt: this.expiredAt,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}

/**
 * Cancel order transaction
 */
export class CancelOrder {
  accountIndex?: number;
  orderBookIndex?: number;
  orderIndex?: number;
  nonce?: number;
  sig?: string;
  
  static fromJson(jsonStr: string): CancelOrder {
    const params = JSON.parse(jsonStr);
    const result = new CancelOrder();
    result.accountIndex = params.AccountIndex;
    result.orderBookIndex = params.OrderBookIndex;
    result.orderIndex = params.OrderIndex;
    result.nonce = params.Nonce;
    result.sig = params.Sig;
    return result;
  }
  
  toJson(): string {
    return JSON.stringify({
      AccountIndex: this.accountIndex,
      OrderBookIndex: this.orderBookIndex,
      OrderIndex: this.orderIndex,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}

/**
 * Withdraw transaction
 */
export class Withdraw {
  accountIndex?: number;
  amount?: number;
  nonce?: number;
  sig?: string;
  
  static fromJson(jsonStr: string): Withdraw {
    const params = JSON.parse(jsonStr);
    const result = new Withdraw();
    result.accountIndex = params.AccountIndex;
    result.amount = params.Amount;
    result.nonce = params.Nonce;
    result.sig = params.Sig;
    return result;
  }
  
  toJson(): string {
    return JSON.stringify({
      AccountIndex: this.accountIndex,
      Amount: this.amount,
      Nonce: this.nonce,
      Sig: this.sig,
    });
  }
}

/**
 * Signer client for the Lighter API
 */
export class SignerClient {
  // Constants
  static readonly ORDER_TYPE_LIMIT = CONSTANTS.ORDER_TYPE_LIMIT;
  static readonly ORDER_TYPE_MARKET = CONSTANTS.ORDER_TYPE_MARKET;
  static readonly ORDER_TYPE_STOP_LOSS = CONSTANTS.ORDER_TYPE_STOP_LOSS;
  static readonly ORDER_TYPE_STOP_LOSS_LIMIT = CONSTANTS.ORDER_TYPE_STOP_LOSS_LIMIT;
  static readonly ORDER_TYPE_TAKE_PROFIT = CONSTANTS.ORDER_TYPE_TAKE_PROFIT;
  static readonly ORDER_TYPE_TAKE_PROFIT_LIMIT = CONSTANTS.ORDER_TYPE_TAKE_PROFIT_LIMIT;
  
  static readonly ORDER_TIME_IN_FORCE_GOOD_TILL_TIME = CONSTANTS.ORDER_TIME_IN_FORCE_GOOD_TILL_TIME;
  static readonly ORDER_TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = CONSTANTS.ORDER_TIME_IN_FORCE_IMMEDIATE_OR_CANCEL;
  static readonly ORDER_TIME_IN_FORCE_POST_ONLY = CONSTANTS.ORDER_TIME_IN_FORCE_POST_ONLY;
  
  static readonly TX_TYPE_CREATE_ORDER = CONSTANTS.TX_TYPE_CREATE_ORDER;
  static readonly TX_TYPE_CANCEL_ORDER = CONSTANTS.TX_TYPE_CANCEL_ORDER;
  static readonly TX_TYPE_WITHDRAW = CONSTANTS.TX_TYPE_WITHDRAW;
  static readonly TX_TYPE_TRANSFER = CONSTANTS.TX_TYPE_TRANSFER;
  static readonly TX_TYPE_CREATE_SUB_ACCOUNT = CONSTANTS.TX_TYPE_CREATE_SUB_ACCOUNT;
  static readonly TX_TYPE_CANCEL_ALL_ORDERS = CONSTANTS.TX_TYPE_CANCEL_ALL_ORDERS;
  static readonly TX_TYPE_MODIFY_ORDER = CONSTANTS.TX_TYPE_MODIFY_ORDER;
  
  static readonly USDC_TICKER_SCALE = CONSTANTS.USDC_TICKER_SCALE;
  static readonly DEFAULT_10_MIN_AUTH_EXPIRY = CONSTANTS.DEFAULT_10_MIN_AUTH_EXPIRY;
  
  private url: string;
  private wallet: ethers.Wallet;
  private chainId: number;
  private apiKeyIndex: number;
  accountIndex: number;
  private txApi: TransactionApi;
  l1Address: string;
  
  /**
   * Constructor
   * @param options - Signer client options
   */
  constructor(options: SignerClientOptions) {
    const networkConfig = getNetworkConfig(options.network);
    this.url = options.url || networkConfig.baseUrl;
    
    // Remove 0x prefix if present
    const privateKey = options.privateKey.startsWith('0x') 
      ? options.privateKey.substring(2) 
      : options.privateKey;
    
    this.wallet = new ethers.Wallet(`0x${privateKey}`);
    this.chainId = options.chainId || networkConfig.chainId;
    this.apiKeyIndex = options.apiKeyIndex || 0;
    this.accountIndex = options.accountIndex || -1;
    this.txApi = new TransactionApi();
    this.l1Address = this.wallet.address;
  }
  
  /**
   * Set account index
   */
  async setAccountIndex(): Promise<number> {
    if (this.accountIndex !== -1) {
      return this.accountIndex;
    }
    
    const response = await fetch(`${this.url}/api/v1/accountsByL1Address?l1_address=${this.l1Address}`);
    const data = await response.json() as { 
      code: number; 
      message?: string; 
      sub_accounts?: Array<{ index: number }> 
    };
    
    if (data.code !== 200 || !data.sub_accounts || data.sub_accounts.length === 0) {
      throw new Error(`Failed to get account: ${data.message || 'No accounts found'}`);
    }
    
    this.accountIndex = Math.min(...data.sub_accounts.map((acc) => acc.index));
    return this.accountIndex;
  }
  
  /**
   * Create an authentication token
   * @param expiry - Token expiry in seconds
   * @returns Authentication token
   */
  createAuthTokenWithExpiry(expiry: number = CONSTANTS.DEFAULT_10_MIN_AUTH_EXPIRY): string {
    if (expiry === CONSTANTS.DEFAULT_10_MIN_AUTH_EXPIRY) {
      expiry = Math.floor(Date.now() / 1000) + 10 * CONSTANTS.MINUTE;
    }
    
    const message = `${this.accountIndex},${this.apiKeyIndex},${expiry}`;
    const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message));
    
    const signature = this.wallet.signingKey.sign(messageHash);
    const r = signature.r.substring(2);
    const s = signature.s.substring(2);
    const v = signature.v.toString(16).padStart(2, '0');
    
    return `${this.accountIndex},${this.apiKeyIndex},${expiry},${r}${s}${v}`;
  }
  
  /**
   * Sign a create order transaction
   * @param marketIndex - Market index
   * @param clientOrderIndex - Client order index
   * @param baseAmount - Base amount
   * @param price - Price
   * @param isAsk - Is ask
   * @param orderType - Order type
   * @param timeInForce - Time in force
   * @param reduceOnly - Reduce only
   * @param triggerPrice - Trigger price
   * @param orderExpiry - Order expiry
   * @param nonce - Nonce
   * @returns Signature
   */
  signCreateOrder(
    marketIndex: number,
    clientOrderIndex: number,
    baseAmount: number,
    price: number,
    isAsk: boolean,
    orderType: number,
    timeInForce: number,
    reduceOnly: boolean,
    triggerPrice: number,
    orderExpiry: number,
    nonce: number
  ): string {
    const message = [
      this.accountIndex,
      this.apiKeyIndex,
      marketIndex,
      clientOrderIndex,
      baseAmount,
      price,
      isAsk ? 1 : 0,
      orderType,
      timeInForce,
      reduceOnly ? 1 : 0,
      triggerPrice,
      orderExpiry,
      nonce,
    ].join(',');
    
    const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message));
    const signature = this.wallet.signingKey.sign(messageHash);
    
    const r = signature.r.substring(2);
    const s = signature.s.substring(2);
    const v = signature.v.toString(16).padStart(2, '0');
    
    return `${r}${s}${v}`;
  }
  
  /**
   * Sign a cancel order transaction
   * @param marketIndex - Market index
   * @param orderIndex - Order index
   * @param nonce - Nonce
   * @returns Signature
   */
  signCancelOrder(
    marketIndex: number,
    orderIndex: number,
    nonce: number
  ): string {
    const message = [
      this.accountIndex,
      this.apiKeyIndex,
      marketIndex,
      orderIndex,
      nonce,
    ].join(',');
    
    const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message));
    const signature = this.wallet.signingKey.sign(messageHash);
    
    const r = signature.r.substring(2);
    const s = signature.s.substring(2);
    const v = signature.v.toString(16).padStart(2, '0');
    
    return `${r}${s}${v}`;
  }
  
  /**
   * Sign a withdraw transaction
   * @param usdcAmount - USDC amount
   * @param nonce - Nonce
   * @returns Signature
   */
  signWithdraw(
    usdcAmount: number,
    nonce: number
  ): string {
    const message = [
      this.accountIndex,
      this.apiKeyIndex,
      usdcAmount,
      nonce,
    ].join(',');
    
    const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message));
    const signature = this.wallet.signingKey.sign(messageHash);
    
    const r = signature.r.substring(2);
    const s = signature.s.substring(2);
    const v = signature.v.toString(16).padStart(2, '0');
    
    return `${r}${s}${v}`;
  }
  
  /**
   * Get the next nonce
   * @returns Next nonce
   */
  async getNextNonce(): Promise<number> {
    const response = await fetch(`${this.url}/api/v1/nextNonce?account_index=${this.accountIndex}&api_key_index=${this.apiKeyIndex}`);
    const data = await response.json() as { 
      code: number; 
      message?: string; 
      nonce?: number 
    };
    
    if (data.code !== 200) {
      throw new Error(`Failed to get next nonce: ${data.message || 'Unknown error'}`);
    }
    
    return data.nonce || 0;
  }
  
  /**
   * Create an order
   * @param marketIndex - Market index
   * @param clientOrderIndex - Client order index
   * @param baseAmount - Base amount
   * @param price - Price
   * @param isAsk - Is ask
   * @param orderType - Order type
   * @param timeInForce - Time in force
   * @param reduceOnly - Reduce only
   * @param triggerPrice - Trigger price
   * @param orderExpiry - Order expiry
   * @param nonce - Nonce
   * @returns Transaction response
   */
  async createOrder(
    marketIndex: number,
    clientOrderIndex: number,
    baseAmount: number,
    price: number,
    isAsk: boolean,
    orderType: number,
    timeInForce: number,
    reduceOnly: number = 0,
    triggerPrice: number = CONSTANTS.NIL_TRIGGER_PRICE,
    orderExpiry: number = CONSTANTS.DEFAULT_28_DAY_ORDER_EXPIRY,
    nonce: number = -1
  ): Promise<[CreateOrder, TxResponse]> {
    if (this.accountIndex === -1) {
      await this.setAccountIndex();
    }
    
    if (nonce === -1) {
      nonce = await this.getNextNonce();
    }
    
    if (orderExpiry === CONSTANTS.DEFAULT_28_DAY_ORDER_EXPIRY) {
      orderExpiry = Math.floor(Date.now() / 1000) + 86400; // 24 hours
    }
    
    const signature = this.signCreateOrder(
      marketIndex,
      clientOrderIndex,
      baseAmount,
      price,
      isAsk,
      orderType,
      timeInForce,
      reduceOnly === 1,
      triggerPrice,
      orderExpiry,
      nonce
    );
    
    const orderInfo = {
      account_index: this.accountIndex,
      api_key_index: this.apiKeyIndex,
      market_index: marketIndex,
      client_order_index: clientOrderIndex,
      base_amount: baseAmount,
      price,
      is_ask: isAsk ? 1 : 0,
      order_type: orderType,
      time_in_force: timeInForce,
      reduce_only: reduceOnly,
      trigger_price: triggerPrice,
      order_expiry: orderExpiry,
      nonce,
      signature,
    };
    
    const response = await fetch(`${this.url}/api/v1/sendTx`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tx_type: SignerClient.TX_TYPE_CREATE_ORDER,
        tx_info: JSON.stringify(orderInfo),
        price_protection: true,
      }),
    });
    
    const data = await response.json() as { 
      code: number; 
      message?: string; 
      tx_hash?: string 
    };
    
    return [
      CreateOrder.fromJson(JSON.stringify(orderInfo)),
      {
        code: data.code,
        message: data.message || '',
        txHash: data.tx_hash || '',
      },
    ];
  }
  
  /**
   * Cancel an order
   * @param marketIndex - Market index
   * @param orderIndex - Order index
   * @param nonce - Nonce
   * @returns Transaction response
   */
  async cancelOrder(
    marketIndex: number,
    orderIndex: number,
    nonce: number = -1
  ): Promise<[CancelOrder, TxResponse]> {
    if (this.accountIndex === -1) {
      await this.setAccountIndex();
    }
    
    if (nonce === -1) {
      nonce = await this.getNextNonce();
    }
    
    const signature = this.signCancelOrder(
      marketIndex,
      orderIndex,
      nonce
    );
    
    const cancelInfo = {
      account_index: this.accountIndex,
      api_key_index: this.apiKeyIndex,
      market_index: marketIndex,
      order_index: orderIndex,
      nonce,
      signature,
    };
    
    const response = await fetch(`${this.url}/api/v1/sendTx`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tx_type: SignerClient.TX_TYPE_CANCEL_ORDER,
        tx_info: JSON.stringify(cancelInfo),
      }),
    });
    
    const data = await response.json() as { 
      code: number; 
      message?: string; 
      tx_hash?: string 
    };
    
    return [
      CancelOrder.fromJson(JSON.stringify(cancelInfo)),
      {
        code: data.code,
        message: data.message || '',
        txHash: data.tx_hash || '',
      },
    ];
  }
  
  /**
   * Withdraw funds
   * @param usdcAmount - USDC amount
   * @param nonce - Nonce
   * @returns Transaction response
   */
  async withdraw(
    usdcAmount: number,
    nonce: number = -1
  ): Promise<[Withdraw, TxResponse]> {
    if (this.accountIndex === -1) {
      await this.setAccountIndex();
    }
    
    if (nonce === -1) {
      nonce = await this.getNextNonce();
    }
    
    const amount = Math.floor(usdcAmount * SignerClient.USDC_TICKER_SCALE);
    
    const signature = this.signWithdraw(
      amount,
      nonce
    );
    
    const withdrawInfo = {
      account_index: this.accountIndex,
      api_key_index: this.apiKeyIndex,
      amount,
      nonce,
      signature,
    };
    
    const response = await fetch(`${this.url}/api/v1/sendTx`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tx_type: SignerClient.TX_TYPE_WITHDRAW,
        tx_info: JSON.stringify(withdrawInfo),
      }),
    });
    
    const data = await response.json() as { 
      code: number; 
      message?: string; 
      tx_hash?: string 
    };
    
    return [
      Withdraw.fromJson(JSON.stringify(withdrawInfo)),
      {
        code: data.code,
        message: data.message || '',
        txHash: data.tx_hash || '',
      },
    ];
  }
  
  /**
   * Close the signer client
   */
  async close(): Promise<void> {
    // Nothing to close
  }
}
