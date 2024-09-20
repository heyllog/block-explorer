import { FC } from 'react'

import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScreenWrapper } from 'core/components/screen-wrapper'
import { AppTitle } from 'core/components/text'
import { useAppSelector } from 'core/store/hooks'
import { sizes } from 'core/theme'

import { AccountInfo } from '../../components/account-info'
import { GenerateAddress } from '../../components/generate-address'
import { selectSendState } from '../../store/selectors'

export const WalletScreen: FC = () => {
  const { privateKey } = useAppSelector(selectSendState)

  const insets = useSafeAreaInsets()

  return (
    <ScreenWrapper style={StyleSheet.flatten([{ marginTop: insets.top, paddingBottom: insets.bottom }])}>
      <AppTitle style={styles.title}>Wallet</AppTitle>

      {!privateKey && <GenerateAddress />}

      {!!privateKey && <AccountInfo />}
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: sizes.baseIndent,
  },
})
