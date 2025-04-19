/**
 * Example: Get block data from the Lighter API
 */

import { BlockApi, NetworkType, getNetworkConfig } from '../';
import { Configuration } from '../lighter-ts/src/runtime';

/**
 * Main function
 */
async function main() {
  // Determine network from environment variable (default to testnet for this example)
  const networkType = process.env.NETWORK === 'mainnet' ? NetworkType.MAINNET : NetworkType.TESTNET;
  console.log(`Using network: ${networkType}`);
  
  // Get network configuration
  const networkConfig = getNetworkConfig(networkType);
  
  // Create an instance of the BlockApi with the selected network configuration
  const config = new Configuration({
    basePath: networkConfig.baseUrl
  });
  const blockApi = new BlockApi(config);
  
  try {
    // Get current block height
    const currentHeightResponse = await blockApi.currentHeight();
    console.log('Current Block Height:', currentHeightResponse.height);
    
    // Get the latest block
    const latestBlockResponse = await blockApi.block({
      by: 'height',
      value: currentHeightResponse.height.toString()
    });
    
    if (latestBlockResponse.blocks && latestBlockResponse.blocks.length > 0) {
      const latestBlock = latestBlockResponse.blocks[0];
      if (latestBlock) {
        console.log('\nLatest Block Details:');
        console.log('- Height:', latestBlock.height);
        console.log('- Commitment:', latestBlock.commitment);
        console.log('- State Root:', latestBlock.stateRoot);
        console.log('- Status:', latestBlock.status);
        console.log('- Committed At:', new Date(latestBlock.committedAt * 1000).toISOString());
        console.log('- Verified At:', latestBlock.verifiedAt ? new Date(latestBlock.verifiedAt * 1000).toISOString() : 'Not verified yet');
        console.log('- Transaction Count:', latestBlock.txs?.length || 0);
      }
    } else {
      console.log('No block data available');
    }
    
    // Get a list of recent blocks
    const blocksResponse = await blockApi.blocks({
      index: Math.max(0, currentHeightResponse.height - 5), // Get the 5 most recent blocks
      limit: 5,
      sort: 'desc'
    });
    
    console.log('\nRecent Blocks:');
    if (blocksResponse.blocks && blocksResponse.blocks.length > 0) {
      blocksResponse.blocks.forEach((block, index) => {
        console.log(`\nBlock #${index + 1}:`);
        console.log('- Height:', block.height);
        console.log('- Committed At:', new Date(block.committedAt * 1000).toISOString());
        console.log('- Transaction Count:', block.txs?.length || 0);
      });
    } else {
      console.log('No recent blocks available');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main().catch(console.error);
