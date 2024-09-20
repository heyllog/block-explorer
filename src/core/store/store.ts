import { configureStore } from '@reduxjs/toolkit'

import { explorerSlice } from 'features/explorer/store/slice'

export const store = configureStore({
  reducer: {
    explorer: explorerSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
