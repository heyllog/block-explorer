export interface BlockInfo {
  height: number
  hash: string
  timestamp: number
  size: number
}

export interface TxInfo {
  hash: string
  gasLimit: string
  gasPrice: string
  addressFrom: string
  type: string
  value: string
  addressTo?: string
}
