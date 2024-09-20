import { FC } from 'react'

import { useRoute } from '@react-navigation/native'
import { Linking, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Block } from 'core/components/block'
import { Button } from 'core/components/button'
import { CopyHeader } from 'core/components/copy-header'
import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'
import { AppText } from 'core/components/text'
import type { RootRouteProps } from 'core/stacks/root'
import { sizes } from 'core/theme'

export const TxSuccessScreen: FC = () => {
  const insets = useSafeAreaInsets()
  const { params } = useRoute<RootRouteProps<'TxSuccess'>>()

  const handleOpenExplorer = (): void => {
    void Linking.openURL(`https://sepolia.etherscan.io/tx/${params.hash}`)
  }

  return (
    <ScreenWrapper style={StyleSheet.flatten([{ paddingTop: insets.top, paddingBottom: insets.bottom }])}>
      <GoBackHeader title='Success' />

      <CopyHeader value={params.hash}>Hash</CopyHeader>
      <Block style={styles.block}>
        <AppText>{params.hash}</AppText>
      </Block>

      <Button theme='transparent' onPress={handleOpenExplorer}>
        Open in explorer
      </Button>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: sizes.baseIndent,
  },
})
