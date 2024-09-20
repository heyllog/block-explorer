import axios from 'axios'

import { sleep } from 'core/utils/sleep'

import type { BlockBookStatusResponse, BlockInfoResponse } from './types'
import { mapBlockInfoResponse } from './utils'
import type { BlockInfo, TxInfo } from '../../types'

const baseUrl = 'https://sepolia1.trezor.io/api'
const client = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
})

export const fetchBlockInfo = async (): Promise<{ blockInfo: BlockInfo; txs: TxInfo[] }> => {
  const { data: statusData } = await client.get<BlockBookStatusResponse>('/status')
  const currentBlock = statusData?.blockbook?.bestHeight

  // to avoid api limitation
  await sleep(1000)

  if (!currentBlock) {
    throw new Error('Cannot receive current block')
  }

  const { data } = await client.get<BlockInfoResponse>(`/block/${currentBlock}`)

  return mapBlockInfoResponse(data)
}
