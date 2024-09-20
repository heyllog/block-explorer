import { FC, useMemo } from 'react'

import { useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Block } from 'core/components/block'
import { BlockDetail } from 'core/components/block-detail'
import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'
import { useAppSelector } from 'core/store/hooks'

import { selectExplorerState } from '../../store/selectors'

export const TxInfoScreen: FC = () => {
  const { txs } = useAppSelector(selectExplorerState)

  const { params } = useRoute()
  const insets = useSafeAreaInsets()

  const tx = useMemo(() => {
    const hash = params?.hash

    if (!hash || !txs) return

    return txs.find((t) => t.hash === hash)
  }, [params, txs])

  if (!tx) return null

  return (
    <ScreenWrapper style={{ paddingTop: insets.top }}>
      <GoBackHeader title='Transaction info' />

      <Block>
        <BlockDetail.Container>
          <BlockDetail.Key>Hash</BlockDetail.Key>
          <BlockDetail.Value>{tx.hash}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Gas price</BlockDetail.Key>
          <BlockDetail.Value>{tx.gasPrice}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Gas limit</BlockDetail.Key>
          <BlockDetail.Value>{tx.gasLimit}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Gas used</BlockDetail.Key>
          <BlockDetail.Value>{tx.gasUsed}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Confirmations</BlockDetail.Key>
          <BlockDetail.Value>{tx.confirmations}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Timestamp</BlockDetail.Key>
          <BlockDetail.Value>{tx.timestamp}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>From</BlockDetail.Key>
          <BlockDetail.Value>{tx.addressFrom}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container isWithoutDivider>
          <BlockDetail.Key>To</BlockDetail.Key>
          <BlockDetail.Value>{tx.addressTo}</BlockDetail.Value>
        </BlockDetail.Container>
      </Block>
    </ScreenWrapper>
  )
}
