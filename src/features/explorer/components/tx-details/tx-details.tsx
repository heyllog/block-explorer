import { FC } from 'react'

import { Linking, StyleSheet, View, ViewProps } from 'react-native'

import { Block } from 'core/components/block/block'
import { BlockDetail } from 'core/components/block-detail'
import { Button } from 'core/components/button'
import { sizes } from 'core/theme'

import type { TxInfo } from '../../types'

interface Props extends ViewProps {
  tx: TxInfo
}

export const TxDetails: FC<Props> = ({ tx, ...props }) => {
  const handleOpenExplorer = (): void => {
    void Linking.openURL(`https://sepolia.etherscan.io/tx/${tx.hash}`)
  }

  return (
    <View {...props}>
      <Block style={styles.block}>
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
          <BlockDetail.Key>Type</BlockDetail.Key>
          <BlockDetail.Value>{tx.type}</BlockDetail.Value>
        </BlockDetail.Container>

        <BlockDetail.Container>
          <BlockDetail.Key>Sender</BlockDetail.Key>
          <BlockDetail.Value>{tx.addressFrom}</BlockDetail.Value>
        </BlockDetail.Container>

        {!!tx.addressTo && (
          <BlockDetail.Container>
            <BlockDetail.Key>Receiver</BlockDetail.Key>
            <BlockDetail.Value>{tx.addressTo}</BlockDetail.Value>
          </BlockDetail.Container>
        )}

        <BlockDetail.Container isWithoutDivider>
          <BlockDetail.Key>Value</BlockDetail.Key>
          <BlockDetail.Value>{tx.value}</BlockDetail.Value>
        </BlockDetail.Container>
      </Block>

      <Button theme='transparent' onPress={handleOpenExplorer}>
        Open in explorer
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: sizes.baseIndent,
  },
})
