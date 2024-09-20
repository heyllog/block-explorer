import axios from 'axios'

import { sleep } from 'core/utils/sleep'

import type { BlockBookStatusResponse, BlockInfoResponse } from './types'
import { mapBlockInfoResponse } from './utils'
import type { BlockInfo, TxInfo } from '../../types'

const baseUrl = 'https://sepolia1.trezor.io/api'
const client = axios.create({
  baseURL: baseUrl,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  },
  timeout: 3000,
})

export const fetchBlockInfo = async (): Promise<{ blockInfo: BlockInfo; txs: TxInfo[] }> => {
  const { data: statusData } = await client.get<BlockBookStatusResponse>('/status')
  const currentBlock = statusData?.blockbook?.bestHeight

  // to avoid api limitation
  await sleep(500)

  if (!currentBlock) {
    throw new Error('Cannot receive current block')
  }

  const { data } = await client.get<BlockInfoResponse>(`/block/${currentBlock}`)

  return mapBlockInfoResponse(data)
}
