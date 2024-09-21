import { FC, memo } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, ViewProps } from 'react-native'
import OctIcon from 'react-native-vector-icons/Octicons'

import { ActiveTouchAction } from 'core/components/active-touch-action'
import { Block } from 'core/components/block'
import { BlockDetail } from 'core/components/block-detail'
import type { UseNavigationType } from 'core/stacks/root'

import type { TxInfo } from '../../types'

interface Props extends ViewProps {
  txInfo: TxInfo
  isDetailsAvailable: boolean
}

export const TxPreview: FC<Props> = memo(({ txInfo, isDetailsAvailable, ...props }) => {
  const navigation = useNavigation<UseNavigationType>()

  const goToDetails = (hash: string) => () => {
    navigation.navigate('TxDetails', { hash })
  }

  return (
    <ActiveTouchAction onPress={goToDetails(txInfo.hash)} disabled={!isDetailsAvailable}>
      <Block {...props}>
        <BlockDetail.Container style={styles.container} isWithoutDivider>
          <BlockDetail.Key style={styles.key} ellipsizeMode='middle' numberOfLines={1}>
            {txInfo.hash}
          </BlockDetail.Key>

          {isDetailsAvailable && (
            <BlockDetail.Value>
              <OctIcon name='arrow-right' size={24} />
            </BlockDetail.Value>
          )}
        </BlockDetail.Container>
      </Block>
    </ActiveTouchAction>
  )
})

TxPreview.displayName = 'TxPreview'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 30,
  },
  key: {
    maxWidth: '50%',
  },
})
