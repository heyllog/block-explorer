import { FC } from 'react'

import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { GoBackHeader } from 'core/components/go-back-header'
import { ScreenWrapper } from 'core/components/screen-wrapper'

import { SendForm } from '../../components/send-form'

export const SendScreen: FC = () => {
  const insets = useSafeAreaInsets()

  return (
    <ScreenWrapper style={StyleSheet.flatten([{ paddingTop: insets.top, paddingBottom: insets.bottom }])}>
      <GoBackHeader title='Send' />

      <SendForm />
    </ScreenWrapper>
  )
}
