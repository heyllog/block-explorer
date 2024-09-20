import { configureStore } from '@reduxjs/toolkit'

import { explorerSlice } from 'features/explorer'
import { walletSlice } from 'features/wallet'

export const store = configureStore({
  reducer: {
    explorer: explorerSlice.reducer,
    wallet: walletSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
