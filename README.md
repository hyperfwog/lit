# Lighter TypeScript/Bun SDK

A TypeScript/Bun SDK for interacting with the Lighter API.

## Installation

```bash
bun install
```

## Features

- **Auto-generated API clients** for all Lighter API endpoints
- **WebSocket client** for real-time order book and account updates
- **Signer client** for creating and signing transactions
- **Transaction helpers** for creating, canceling orders, and withdrawing funds

## Usage

### Basic API Usage

```typescript
import { InfoApi } from './generated-sdk/src';

async function main() {
  // Create an instance of the InfoApi
  const infoApi = new InfoApi();
  
  try {
    // Get ZkLighter basic info
    const zkLighterInfo = await infoApi.layer2BasicInfo();
    console.log('ZkLighter Basic Info:', zkLighterInfo);
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);
```

### WebSocket Client

The WebSocket client allows you to subscribe to real-time order book and account updates.

```typescript
import { WsClient } from './src/ws_client';

function main() {
  // Create a WebSocket client
  const wsClient = new WsClient({
    orderBookIds: [1], // Market ID 1
    onOrderBookUpdate: (marketId, orderBook) => {
      console.log(`Order book update for market ${marketId}:`, orderBook);
    },
  });
  
  // Run the WebSocket client
  wsClient.run();
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('Closing WebSocket connection...');
    wsClient.close();
    process.exit(0);
  });
}

main();
```

### Signer Client

The Signer client allows you to create and sign transactions.

```typescript
import { SignerClient, CONSTANTS } from './src/signer_client';

async function main() {
  // Replace with your private key
  const privateKey = 'YOUR_PRIVATE_KEY';
  
  // Create a Signer client
  const signerClient = new SignerClient({
    privateKey,
    // Optional parameters
    // url: 'https://mainnet.zklighter.elliot.ai', // Default
    // chainId: 300, // Default
    // apiKeyIndex: 0, // Default
    // accountIndex: -1, // Default (will be set automatically)
  });
  
  try {
    // Set account index (if not provided in constructor)
    await signerClient.setAccountIndex();
    console.log('Account index:', signerClient.accountIndex);
    
    // Create an order
    const marketIndex = 1; // Example market index
    const clientOrderIndex = Math.floor(Math.random() * 1000000); // Random client order index
    const baseAmount = 1000000; // 1 unit (depends on the market's base precision)
    const price = 50000000; // $50 (depends on the market's quote precision)
    const isAsk = true; // Sell order
    
    const [createOrderTx, createOrderResponse] = await signerClient.createOrder(
      marketIndex,
      clientOrderIndex,
      baseAmount,
      price,
      isAsk,
      CONSTANTS.ORDER_TYPE_LIMIT,
      CONSTANTS.ORDER_TIME_IN_FORCE_GOOD_TILL_TIME
    );
    
    console.log('Create order response:', createOrderResponse);
    
    // Cancel the order
    const [cancelOrderTx, cancelOrderResponse] = await signerClient.cancelOrder(
      marketIndex,
      clientOrderIndex
    );
    
    console.log('Cancel order response:', cancelOrderResponse);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the Signer client
    await signerClient.close();
  }
}

main().catch(console.error);
```

## Examples

The SDK includes several examples in the `examples` directory:

- `get_info.ts`: Demonstrates how to use the InfoApi to get basic information about the Lighter platform.
- `ws.ts`: Demonstrates how to use the WebSocket client to subscribe to real-time order book updates.
- `create_cancel_order.ts`: Demonstrates how to use the Signer client to create and cancel orders.

To run an example:

```bash
bun run examples/get_info.ts
```

## API Documentation

The SDK provides access to all Lighter API endpoints through auto-generated clients:

- `AccountApi`: Account-related operations
- `BlockApi`: Block-related operations
- `CandlestickApi`: Candlestick data operations
- `InfoApi`: General information operations
- `OrderApi`: Order-related operations
- `RootApi`: Root operations
- `TransactionApi`: Transaction-related operations

Each API client provides methods corresponding to the API endpoints.

## WebSocket Client

The WebSocket client allows you to subscribe to real-time updates:

```typescript
const wsClient = new WsClient({
  // Order book IDs to subscribe to
  orderBookIds: [1, 2, 3],
  
  // Account IDs to subscribe to
  accountIds: [123],
  
  // Callback for order book updates
  onOrderBookUpdate: (marketId, orderBook) => {
    console.log(`Order book update for market ${marketId}:`, orderBook);
  },
  
  // Callback for account updates
  onAccountUpdate: (accountId, account) => {
    console.log(`Account update for account ${accountId}:`, account);
  },
});

// Run the WebSocket client
wsClient.run();

// Close the WebSocket client
wsClient.close();
```

## Signer Client

The Signer client allows you to create and sign transactions:

```typescript
const signerClient = new SignerClient({
  // Required
  privateKey: 'YOUR_PRIVATE_KEY',
  
  // Optional
  url: 'https://mainnet.zklighter.elliot.ai',
  chainId: 300,
  apiKeyIndex: 0,
  accountIndex: -1, // Will be set automatically if not provided
});

// Create an order
const [createOrderTx, createOrderResponse] = await signerClient.createOrder(
  marketIndex,
  clientOrderIndex,
  baseAmount,
  price,
  isAsk,
  CONSTANTS.ORDER_TYPE_LIMIT,
  CONSTANTS.ORDER_TIME_IN_FORCE_GOOD_TILL_TIME
);

// Cancel an order
const [cancelOrderTx, cancelOrderResponse] = await signerClient.cancelOrder(
  marketIndex,
  orderIndex
);

// Withdraw funds
const [withdrawTx, withdrawResponse] = await signerClient.withdraw(
  usdcAmount
);

// Close the Signer client
await signerClient.close();
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
