import type { AppState } from 'core/store/store'

import type { WalletState } from './slice'

export const selectSendState = (state: AppState): WalletState => state.wallet
