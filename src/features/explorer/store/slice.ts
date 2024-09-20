import { createSlice } from '@reduxjs/toolkit'

import patchStateReducer from 'core/store/utils/patch-state'
import type { BlockInfo, TxInfo } from 'features/explorer/types'

export interface ExplorerState {
  isLoadingInfo: boolean
  isFailedLoadInfo: boolean

  blockInfo?: BlockInfo
  txs?: TxInfo[]
}

const initialState: ExplorerState = {
  isLoadingInfo: false,
  isFailedLoadInfo: false,
}

export const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    patchExplorerState: patchStateReducer<ExplorerState>,
  },
})

export const { patchExplorerState } = explorerSlice.actions
