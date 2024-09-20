import React, { FC } from 'react'

import { StyleSheet, View, ViewProps } from 'react-native'

import { colors, sizes } from 'core/theme'

export const Block: FC<ViewProps> = ({ style, ...props }) => {
  return <View style={StyleSheet.flatten([styles.block, style])} {...props} />
}

export const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.background.block,
    borderColor: colors.text.main,
    borderStyle: 'solid',
    borderRadius: sizes.blockBorderRadius,
    paddingVertical: sizes.blockPaddingVertical,
    paddingHorizontal: sizes.blockPaddingHorizontal,
  },
})
