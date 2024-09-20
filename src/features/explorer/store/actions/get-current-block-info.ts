import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchBlockInfo } from '../../clients/trezor/client'
import { patchExplorerState } from '../slice'

export const getCurrentBlockInfo = createAsyncThunk('explorer/get-current-block-info', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(
      patchExplorerState({
        isLoadingInfo: true,
        isFailedLoadInfo: false,
      }),
    )

    const { blockInfo, txs } = await fetchBlockInfo()

    dispatch(
      patchExplorerState({
        blockInfo,
        txs,
        isLoadingInfo: false,
      }),
    )
  } catch (e) {
    dispatch(
      patchExplorerState({
        isLoadingInfo: false,
        isFailedLoadInfo: true,
      }),
    )
  }
})
