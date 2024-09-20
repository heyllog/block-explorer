import type { BlockInfoResponse, Tx } from './types'
import type { BlockInfo, TxInfo } from '../../types'

export const mapTx = (tx: Tx): TxInfo => {
  const addressTo = tx?.vin?.[0]?.addresses?.[0]
  const addressFrom = tx?.vout?.[0]?.addresses?.[0]

  return {
    addressTo,
    addressFrom,
    hash: tx.txid,
    timestamp: tx.blockTime,
    gasLimit: String(tx.ethereumSpecific.gasLimit),
    gasUsed: String(tx.ethereumSpecific.gasUsed),
    gasPrice: String(tx.ethereumSpecific.gasPrice),
    confirmations: tx.confirmations,
  }
}

export const mapBlockInfoResponse = (data: Partial<BlockInfoResponse>): { blockInfo: BlockInfo; txs: TxInfo[] } => {
  const height = data?.height
  const hash = data?.hash
  const confirmations = data?.confirmations
  const timestamp = data?.time
  const size = data?.size
  const txs = data?.txs

  if (!height || !confirmations || !hash || !timestamp || !size || !txs) throw new Error('Incorrect user info')

  return {
    blockInfo: {
      height,
      hash,
      confirmations,
      timestamp,
      size,
    },
    txs: txs.map(mapTx),
  }
}
