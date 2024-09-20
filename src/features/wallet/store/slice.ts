import { createSlice } from '@reduxjs/toolkit'

import patchStateReducer from 'core/store/utils/patch-state'

import type { PrivateKey, Address } from '../types'

export interface WalletState {
  privateKey?: PrivateKey
  address?: Address
  balance?: string

  isGeneratingAddress: boolean
  isSendingTx: boolean
}

const initialState: WalletState = {
  isGeneratingAddress: false,
  isSendingTx: false,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    patchWalletState: patchStateReducer<WalletState>,
    resetWalletState: () => initialState,
  },
})

export const { patchWalletState, resetWalletState } = walletSlice.actions
