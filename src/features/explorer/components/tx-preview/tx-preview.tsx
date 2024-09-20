import { FC, memo } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, ViewProps } from 'react-native'
import OctIcon from 'react-native-vector-icons/Octicons'

import { ActiveTouchAction } from 'core/components/active-touch-action'
import { Block } from 'core/components/block'
import { BlockDetail } from 'core/components/block-detail'

import type { TxInfo } from '../../types'

interface Props extends ViewProps {
  txInfo: TxInfo
}

export const TxPreview: FC<Props> = memo(({ txInfo, ...props }) => {
  const navigation = useNavigation()

  const goToDetails = (hash: string) => () => {
    navigation.navigate('TxDetails', { hash })
  }

  return (
    <ActiveTouchAction onPress={goToDetails(txInfo.hash)}>
      <Block {...props}>
        <BlockDetail.Container style={styles.container} isWithoutDivider>
          <BlockDetail.Key style={styles.key} ellipsizeMode='middle' numberOfLines={1}>
            {txInfo.hash}
          </BlockDetail.Key>

          <BlockDetail.Value>
            <OctIcon name='arrow-right' size={24} />
          </BlockDetail.Value>
        </BlockDetail.Container>
      </Block>
    </ActiveTouchAction>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  key: {
    maxWidth: '50%',
  },
})
