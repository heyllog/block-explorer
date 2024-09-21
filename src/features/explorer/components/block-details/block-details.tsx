import { FC } from 'react'

import { ViewProps } from 'react-native'

import { Block } from 'core/components/block/block'
import { BlockDetail } from 'core/components/block-detail'

import type { BlockInfo } from '../../types'

interface Props extends ViewProps {
  blockInfo: BlockInfo
}

export const BlockDetails: FC<Props> = ({ blockInfo, ...props }) => {
  return (
    <Block {...props}>
      <BlockDetail.Container>
        <BlockDetail.Key>Height</BlockDetail.Key>
        <BlockDetail.Value>{blockInfo.height}</BlockDetail.Value>
      </BlockDetail.Container>

      <BlockDetail.Container>
        <BlockDetail.Key>Hash</BlockDetail.Key>
        <BlockDetail.Value>{blockInfo.hash}</BlockDetail.Value>
      </BlockDetail.Container>

      <BlockDetail.Container>
        <BlockDetail.Key>Timestamp</BlockDetail.Key>
        <BlockDetail.Value>{blockInfo.timestamp}</BlockDetail.Value>
      </BlockDetail.Container>

      <BlockDetail.Container isWithoutDivider>
        <BlockDetail.Key>Size (bytes)</BlockDetail.Key>
        <BlockDetail.Value>{blockInfo.size}</BlockDetail.Value>
      </BlockDetail.Container>
    </Block>
  )
}
