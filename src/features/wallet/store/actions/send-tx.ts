import { createAsyncThunk } from '@reduxjs/toolkit'
import { parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

import type { AppState } from 'core/store/store'

import { walletClient } from '../../clients/wallet-client'
import type { Address } from '../../types'
import { selectSendState } from '../selectors'
import { patchWalletState } from '../slice'

interface SendParams {
  amount: string
  addressTo: Address
}

export const sendTx = createAsyncThunk('wallet/send-tx', async ({ amount, addressTo }: SendParams, thunkAPI) => {
  const { dispatch } = thunkAPI

  const state = thunkAPI.getState() as AppState
  const { privateKey } = selectSendState(state)

  if (!privateKey) throw new Error('Private key is not provided')

  if (!amount || !addressTo) throw new Error('Incorrect send params')

  try {
    dispatch(
      patchWalletState({
        isSendingTx: true,
      }),
    )

    const account = privateKeyToAccount(privateKey)

    const hash = await walletClient.sendTransaction({
      account,
      to: addressTo,
      value: parseEther(amount),
    })

    dispatch(
      patchWalletState({
        isSendingTx: false,
      }),
    )

    return hash
  } catch (e) {
    dispatch(
      patchWalletState({
        isSendingTx: false,
      }),
    )

    throw e
  }
})
