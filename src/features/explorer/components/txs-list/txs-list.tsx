import { FC, type ReactElement } from 'react'

import { FlatList, StyleSheet, FlatListProps } from 'react-native'

import { sizes } from 'core/theme'
import { TxPreview } from 'features/explorer/components/tx-preview'

import type { TxInfo } from '../../types'

interface Props extends Omit<FlatListProps<TxInfo>, 'data' | 'renderItem'> {
  txs: TxInfo[]
}

export const TxsList: FC<Props> = ({ txs, ...props }) => {
  return (
    <FlatList
      data={txs}
      renderItem={({ item }): ReactElement => <TxPreview style={styles.title} txInfo={item} />}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: sizes.baseIndent,
  },
})
