export type NetworkMetadata = {
  displayName: string
  blockExplorer: string
  ticker: string
  tickerName: string
  chainId: string
}

export const blockchainNetworkMetadata: { [key: string]: NetworkMetadata } = {
  mumbai: {
    displayName: 'Polygon Mumbai Testnet',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    ticker: 'matic',
    tickerName: 'matic',
    chainId: '0x13881', // 80001
  },
  polygon: {
    displayName: 'Polygon Mainnet',
    blockExplorer: 'https://polygonscan.com/',
    ticker: 'matic',
    tickerName: 'matic',
    chainId: '0x89', // 137
  },
}
