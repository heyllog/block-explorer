import { FC, useMemo } from 'react'

import { useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'
import { AppText } from 'core/components/text'
import { useAppSelector } from 'core/store/hooks'

import { TxDetails } from '../../components/tx-details'
import { selectExplorerState } from '../../store/selectors'
import { hasHash } from '../../utils/has-hash'

export const TxInfoScreen: FC = () => {
  const { txs } = useAppSelector(selectExplorerState)

  const { params } = useRoute()
  const insets = useSafeAreaInsets()

  const tx = useMemo(() => {
    if (!hasHash(params) || !txs) return

    return txs.find((t) => t.hash === params.hash)
  }, [params, txs])

  return (
    <ScreenWrapper style={{ paddingTop: insets.top }}>
      <GoBackHeader title='Transaction info' />

      {tx && <TxDetails tx={tx} />}
      {!tx && <AppText>Cannot find tx</AppText>}
    </ScreenWrapper>
  )
}
