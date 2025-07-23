import { defineChain } from 'viem'

/**
 * Citrea Testnet Chain Configuration
 * Chain ID: 5115
 * RPC: https://rpc.testnet.citrea.xyz
 * Explorer: https://explorer.testnet.citrea.xyz
 * Currency: cBTC
 */
export const citreaTestnet = defineChain({
  id: 5115,
  name: 'Citrea Testnet',
  nativeCurrency: {
    name: 'Citrea Bitcoin',
    symbol: 'cBTC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.citrea.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Citrea Explorer',
      url: 'https://explorer.testnet.citrea.xyz',
    },
  },
  testnet: true,
})

/**
 * Supported chains for the application
 */
export const supportedChains = [citreaTestnet]
