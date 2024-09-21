import { publicClient } from 'features/wallet'

import { mapBlockInfoResponse } from './mappers'
import type { BlockInfo, TxInfo } from '../types'

export const fetchBlockInfo = async (): Promise<{ blockInfo: BlockInfo; txs: TxInfo[] }> => {
  const block = await publicClient.getBlock({
    includeTransactions: true,
  })

  if (!block) {
    throw new Error('Cannot receive current block')
  }

  return mapBlockInfoResponse(block)
}
