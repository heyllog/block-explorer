import { FC } from 'react'

import { useRoute } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Block } from 'core/components/block'
import { CopyHeader } from 'core/components/copy-header'
import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'
import { AppText } from 'core/components/text'
import type { RootRouteProps } from 'core/stacks/root'
import { sizes } from 'core/theme'

export const TxErrorScreen: FC = () => {
  const insets = useSafeAreaInsets()
  const { params } = useRoute<RootRouteProps<'TxError'>>()

  return (
    <ScreenWrapper style={StyleSheet.flatten([{ paddingTop: insets.top, paddingBottom: insets.bottom }])}>
      <GoBackHeader title='Error' />

      <CopyHeader value={params.error}>Error</CopyHeader>
      <Block style={styles.block}>
        <AppText>{params.error}</AppText>
      </Block>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: sizes.baseIndent,
  },
})
