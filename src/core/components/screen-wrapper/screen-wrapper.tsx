import React, { FC, PropsWithChildren } from 'react'

import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native'

import { VerticalSpace } from 'core/components/vertical-space'
import { colors, sizes } from 'core/theme'

interface Props extends ScrollViewProps {}

export const ScreenWrapper: FC<PropsWithChildren<Props>> = ({ style, children, ...props }) => {
  return (
    <ScrollView style={StyleSheet.flatten([styles.container, style])} {...props}>
      {children}
      <VerticalSpace />
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.main,
    paddingVertical: sizes.pagePaddingVertical,
    paddingHorizontal: sizes.pagePaddingHorizontal,
  },
})
