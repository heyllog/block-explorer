import { createWalletClient, http } from 'viem'
import { sepolia } from 'viem/chains'

export const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(),
})
