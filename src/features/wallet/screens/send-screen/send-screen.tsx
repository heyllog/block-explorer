import { FC } from 'react'

import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'
import { useAppSelector } from 'core/store/hooks'
import { sizes } from 'core/theme'
import { SendForm } from 'features/wallet/components/send-form'

import { selectSendState } from '../../store/selectors'

export const SendScreen: FC = () => {
  const { privateKey } = useAppSelector(selectSendState)

  const insets = useSafeAreaInsets()

  return (
    <ScreenWrapper style={StyleSheet.flatten([{ paddingTop: insets.top, paddingBottom: insets.bottom }])}>
      <GoBackHeader title='Send' />

      <SendForm />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: sizes.baseIndent,
  },
})
