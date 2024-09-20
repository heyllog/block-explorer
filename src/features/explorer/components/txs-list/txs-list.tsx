import { FC, type ReactElement } from 'react'

import { FlatList, StyleSheet, FlatListProps } from 'react-native'

import { sizes } from 'core/theme'

import type { TxInfo } from '../../types'
import { TxPreview } from '../tx-preview'

interface Props extends Omit<FlatListProps<TxInfo>, 'data' | 'renderItem'> {
  txs: TxInfo[]
  isLoading: boolean
}

export const TxsList: FC<Props> = ({ txs, isLoading, ...props }) => {
  return (
    <FlatList
      data={txs}
      renderItem={({ item }): ReactElement => (
        <TxPreview style={styles.title} txInfo={item} isDetailsAvailable={!isLoading} />
      )}
      keyExtractor={(item): string => item.hash}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: sizes.baseIndent,
  },
})
