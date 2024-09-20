import type { AppState } from 'core/store/store'

import type { ExplorerState } from './slice'

export const selectExplorerState = (state: AppState): ExplorerState => state.explorer
