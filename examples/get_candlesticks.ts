/**
 * Example: Get candlestick data from the Lighter API
 */

import { CandlestickApi, NetworkType, getNetworkConfig } from '../';
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
  
  // Create an instance of the CandlestickApi with the selected network configuration
  const config = new Configuration({
    basePath: networkConfig.baseUrl
  });
  const candlestickApi = new CandlestickApi(config);
  
  try {
    // Market ID for the candlesticks (e.g., ETH/USD might be 0)
    const marketId = 0;
    
    // Calculate timestamps for the last 24 hours
    const endTimestamp = Math.floor(Date.now() / 1000);
    const startTimestamp = endTimestamp - (24 * 60 * 60); // 24 hours ago
    
    // Get hourly candlesticks for the last 24 hours
    const candlesticksResponse = await candlestickApi.candlesticks({
      marketId,
      resolution: '1h',
      startTimestamp,
      endTimestamp,
      countBack: 24
    });
    
    console.log(`\nHourly Candlesticks for Market ID ${marketId} (last 24 hours):`);
    if (candlesticksResponse.candlesticks && candlesticksResponse.candlesticks.length > 0) {
      console.log(`Found ${candlesticksResponse.candlesticks.length} candlesticks`);
      
      // Display the most recent 5 candlesticks
      const recentCandlesticks = candlesticksResponse.candlesticks.slice(-5);
      
      recentCandlesticks.forEach((candle, index) => {
        const date = new Date(candle.timestamp * 1000);
        console.log(`\nCandlestick #${index + 1} (${date.toISOString()}):`);
        console.log('- Open:', candle.open);
        console.log('- High:', candle.high);
        console.log('- Low:', candle.low);
        console.log('- Close:', candle.close);
        console.log('- Volume (Base):', candle.volume0);
        console.log('- Volume (Quote):', candle.volume1);
      });
      
      // Calculate and display price change over the period
      if (candlesticksResponse.candlesticks.length >= 2) {
        const firstCandle = candlesticksResponse.candlesticks[0];
        const lastCandle = candlesticksResponse.candlesticks[candlesticksResponse.candlesticks.length - 1];
        
        if (firstCandle && lastCandle) {
          const priceChange = lastCandle.close - firstCandle.open;
          const priceChangePercent = (priceChange / firstCandle.open) * 100;
          
          console.log('\nPrice Summary:');
          console.log('- Starting Price:', firstCandle.open);
          console.log('- Ending Price:', lastCandle.close);
          console.log('- Price Change:', priceChange.toFixed(2));
          console.log('- Price Change %:', priceChangePercent.toFixed(2) + '%');
        }
      }
    } else {
      console.log('No candlestick data available');
    }
    
    // Get funding rates if available
    try {
      const fundingsResponse = await candlestickApi.fundings({
        marketId,
        resolution: '1h',
        startTimestamp,
        endTimestamp,
        countBack: 24
      });
      
      console.log('\nFunding Rates:');
      if (fundingsResponse.fundings && fundingsResponse.fundings.length > 0) {
        console.log(`Found ${fundingsResponse.fundings.length} funding entries`);
        
        // Display the most recent 3 funding rates
        const recentFundings = fundingsResponse.fundings.slice(-3);
        
        recentFundings.forEach((funding, index) => {
          const date = new Date(funding.timestamp * 1000);
          console.log(`\nFunding #${index + 1} (${date.toISOString()}):`);
          console.log('- Rate:', funding.rate);
          console.log('- Value:', funding.value);
          console.log('- Direction:', funding.direction);
        });
      } else {
        console.log('No funding data available');
      }
    } catch (error) {
      console.log('Funding data not available for this market');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the main function
main().catch(console.error);
