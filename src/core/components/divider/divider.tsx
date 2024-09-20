import React, { FC } from 'react'

import { StyleSheet, View, ViewProps } from 'react-native'

import { colors, sizes } from 'core/theme'

export const Divider: FC<ViewProps> = ({ style, ...props }) => {
  return <View style={StyleSheet.flatten([styles.block, style])} {...props} />
}

export const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.border.main,
    width: '100%',
    height: 1,
    marginVertical: sizes.dividerMargin,
    opacity: 0.2,
  },
})
