export interface BlockInfoResponse {
  page: number
  totalPages: number
  itemsOnPage: number
  hash: string
  previousBlockHash: string
  nextBlockHash: string
  height: number
  confirmations: number
  size: number
  time: number
  version: number
  merkleRoot: string
  nonce: string
  bits: string
  difficulty: string
  txCount: number
  txs: Tx[]
}

export interface BlockBookStatusResponse {
  blockbook: Blockbook
  backend: Backend
}

interface Blockbook {
  coin: string
  network: string
  host: string
  version: string
  gitCommit: string
  buildTime: string
  syncMode: boolean
  initialSync: boolean
  inSync: boolean
  bestHeight: number
  lastBlockTime: string
  inSyncMempool: boolean
  lastMempoolTime: string
  mempoolSize: number
  decimals: number
  dbSize: number
  about: string
}

interface Backend {
  chain: string
  blocks: number
  bestBlockHash: string
  difficulty: string
  version: string
  consensus_version: string
}

export interface Tx {
  txid: string
  vin: Vin[]
  vout: Vout[]
  blockHash: string
  blockHeight: number
  confirmations: number
  blockTime: number
  value: string
  fees: string
  tokenTransfers?: TokenTransfer[]
  ethereumSpecific: EthereumSpecific
}

interface Vin {
  n: number
  addresses: string[]
  isAddress: boolean
}

interface Vout {
  value: string
  n: number
  addresses: string[]
  isAddress: boolean
}

interface TokenTransfer {
  type: string
  from: string
  to: string
  contract: string
  name: string
  symbol: string
  decimals: number
  value: string
}

interface EthereumSpecific {
  status: number
  nonce: number
  gasLimit: number
  gasUsed: number
  gasPrice: string
  data: string
  parsedData: ParsedData
  internalTransfers?: InternalTransfer[]
  error?: string
}

interface ParsedData {
  methodId: string
  name: string
  function?: string
  params?: Param[]
}

interface Param {
  type: string
  values: string[]
}

interface InternalTransfer {
  type: number
  from: string
  to: string
  value: string
}
