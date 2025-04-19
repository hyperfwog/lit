/**
 * Example: Using the WebSocket client
 */

import { WsClient } from '../src/ws_client';

/**
 * Main function
 */
function main() {
  // Create a WebSocket client
  const wsClient = new WsClient({
    orderBookIds: [1], // Market ID 1
    onOrderBookUpdate: (marketId, orderBook) => {
      console.log(`Order book update for market ${marketId}:`);
      console.log('- Asks:', orderBook.asks.slice(0, 3)); // Show top 3 asks
      console.log('- Bids:', orderBook.bids.slice(0, 3)); // Show top 3 bids
    },
  });
  
  // Connect to the WebSocket server
  console.log('Connecting to WebSocket server...');
  
  try {
    // Run the WebSocket client
    wsClient.run();
    
    // Handle process termination
    process.on('SIGINT', () => {
      console.log('Closing WebSocket connection...');
      wsClient.close();
      process.exit(0);
    });
    
    console.log('WebSocket client running. Press Ctrl+C to exit.');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the main function
main();
