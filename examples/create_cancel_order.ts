/**
 * Example: Create and cancel an order using the Signer client
 */

import { SignerClient, CONSTANTS } from '../src/signer_client';

/**
 * Main function
 */
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
    
    console.log('Creating order...');
    const [createOrderTx, createOrderResponse] = await signerClient.createOrder(
      marketIndex,
      clientOrderIndex,
      baseAmount,
      price,
      isAsk,
      CONSTANTS.ORDER_TYPE_LIMIT,
      CONSTANTS.ORDER_TIME_IN_FORCE_GOOD_TILL_TIME
    );
    
    console.log('Create order response:');
    console.log('- Code:', createOrderResponse.code);
    console.log('- Message:', createOrderResponse.message);
    console.log('- Tx Hash:', createOrderResponse.txHash);
    
    // Wait for a moment
    console.log('Waiting for 5 seconds...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Cancel the order
    console.log('Canceling order...');
    const [cancelOrderTx, cancelOrderResponse] = await signerClient.cancelOrder(
      marketIndex,
      clientOrderIndex
    );
    
    console.log('Cancel order response:');
    console.log('- Code:', cancelOrderResponse.code);
    console.log('- Message:', cancelOrderResponse.message);
    console.log('- Tx Hash:', cancelOrderResponse.txHash);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the Signer client
    await signerClient.close();
  }
}

// Run the main function
main().catch(console.error);
