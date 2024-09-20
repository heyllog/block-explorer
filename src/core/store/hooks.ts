import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppState, AppDispatch } from 'core/store/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
