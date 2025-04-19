/**
 * Configuration for the Lighter SDK
 */

/**
 * Network type
 */
export enum NetworkType {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}

/**
 * Network configuration
 */
export interface NetworkConfig {
  /**
   * Base URL for the API
   */
  baseUrl: string;
  
  /**
   * WebSocket URL
   */
  wsUrl: string;
  
  /**
   * Chain ID
   */
  chainId: number;
}

/**
 * Network configurations
 */
export const NETWORKS: Record<NetworkType, NetworkConfig> = {
  [NetworkType.MAINNET]: {
    baseUrl: 'https://mainnet.zklighter.elliot.ai',
    wsUrl: 'wss://mainnet.zklighter.elliot.ai/stream',
    chainId: 300,
  },
  [NetworkType.TESTNET]: {
    baseUrl: 'https://testnet.zklighter.elliot.ai',
    wsUrl: 'wss://testnet.zklighter.elliot.ai/stream',
    chainId: 300, // Assuming the chain ID is the same for testnet
  },
};

/**
 * Default network type
 */
export const DEFAULT_NETWORK = NetworkType.MAINNET;

/**
 * Get network configuration
 * @param network - Network type
 * @returns Network configuration
 */
export function getNetworkConfig(network: NetworkType = DEFAULT_NETWORK): NetworkConfig {
  return NETWORKS[network];
}
