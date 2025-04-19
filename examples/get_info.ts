/**
 * Example: Get information from the Lighter API
 */

import { InfoApi } from '../generated-sdk/src';

/**
 * Main function
 */
async function main() {
  // Create an instance of the InfoApi
  const infoApi = new InfoApi();
  
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
