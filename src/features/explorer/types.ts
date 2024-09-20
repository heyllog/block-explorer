export interface BlockInfo {
  height: number
  hash: string
  confirmations: number
  timestamp: number
  size: number
}

export interface TxInfo {
  hash: string
  timestamp: number
  confirmations: number
  gasLimit: string
  gasUsed: string
  gasPrice: string
  addressTo: string
  addressFrom: string
}
