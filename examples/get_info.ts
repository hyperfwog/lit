/**
 * Example: Get information from the Lighter API
 */

import { InfoApi, NetworkType, getNetworkConfig } from '../';
import { Configuration } from '../lighter-ts/src/runtime';

/**
 * Main function
 */
async function main() {
  // Determine network from environment variable
  const networkType = process.env.NETWORK === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET;
  console.log(`Using network: ${networkType}`);
  
  // Get network configuration
  const networkConfig = getNetworkConfig(networkType);
  
  // Create an instance of the InfoApi with the selected network configuration
  const config = new Configuration({
    basePath: networkConfig.baseUrl
  });
  const infoApi = new InfoApi(config);
  
  try {
    // Get ZkLighter basic info
    const zkLighterInfo = await infoApi.layer2BasicInfo();
    console.log('ZkLighter Basic Info:');
    console.log('- Code:', zkLighterInfo.code);
    console.log('- Message:', zkLighterInfo.message);
    console.log('- Block Committed:', zkLighterInfo.blockCommitted);
    console.log('- Block Verified:', zkLighterInfo.blockVerified);
    console.log('- Total Transaction Count:', zkLighterInfo.totalTransactionCount);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main().catch(console.error);
