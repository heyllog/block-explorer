import { createAsyncThunk } from '@reduxjs/toolkit'
import { formatEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

import { publicClient } from '../../clients/public-client'
import type { PrivateKey } from '../../types'
import { patchWalletState } from '../slice'

export const generateAddress = createAsyncThunk('wallet/generate-address', async (key: string, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(
      patchWalletState({
        isGeneratingAddress: true,
      }),
    )

    const pk: PrivateKey = key.startsWith('0x') ? (key as `0x${string}`) : `0x${key}`

    const account = privateKeyToAccount(pk)

    const balance = await publicClient.getBalance({
      address: account.address,
    })

    dispatch(
      patchWalletState({
        privateKey: pk,
        balance: formatEther(balance),
        address: account.address,
        isGeneratingAddress: false,
      }),
    )
  } catch (e) {
    dispatch(
      patchWalletState({
        isGeneratingAddress: false,
      }),
    )

    throw e
  }
})
