import { formatEther, formatGwei, type GetBlockReturnType } from 'viem'
import { sepolia } from 'viem/chains'

import type { BlockInfo, TxInfo } from '../types'

export const mapTxs = (txs: GetBlockReturnType<typeof sepolia, true>['transactions']): TxInfo[] => {
  return txs.map((tx) => {
    const addressTo = tx?.to || undefined
    const addressFrom = tx?.from

    return {
      addressTo,
      addressFrom,
      hash: tx.hash,
      gasLimit: String(tx.gas),
      gasPrice: tx.gasPrice ? formatGwei(tx.gasPrice) : '0',
      type: tx.type?.toUpperCase(),
      value: formatEther(tx.value),
    }
  })
}

export const mapBlockInfoResponse = (
  data: GetBlockReturnType<typeof sepolia, true>,
): { blockInfo: BlockInfo; txs: TxInfo[] } => {
  const height = data?.number
  const hash = data?.hash
  const timestamp = data?.timestamp
  const size = data?.size
  const txs = data?.transactions

  if (!height || !hash || !timestamp || !size || !txs) throw new Error('Incorrect user info')

  return {
    blockInfo: {
      height: Number(height),
      hash,
      timestamp: Number(timestamp),
      size: Number(size),
    },
    txs: mapTxs(txs),
  }
}
