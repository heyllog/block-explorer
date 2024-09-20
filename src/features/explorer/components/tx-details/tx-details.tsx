import { FC } from 'react'

import { ViewProps } from 'react-native'

import { Block } from 'core/components/block/block'
import { BlockDetail } from 'core/components/block-detail'

import type { TxInfo } from '../../types'

interface Props extends ViewProps {
  tx: TxInfo
}

export const TxDetails: FC<Props> = ({ tx, ...props }) => {
  return (
    <Block {...props}>
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
  )
}
