import React, { FC } from 'react'

import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { colors, fonts, sizes } from 'core/theme'

export const AppTextInput: FC<TextInputProps> = ({ style, ...props }) => {
  return <TextInput style={StyleSheet.flatten([styles.input, style])} {...props} />
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.background.block,
    borderColor: colors.text.main,
    borderStyle: 'solid',
    borderRadius: sizes.inputBorderRadius,
    paddingVertical: sizes.inputPaddingVertical,
    paddingHorizontal: sizes.inputPaddingHorizontal,
    color: colors.text.main,
    fontFamily: fonts.textFontFamily,
    fontSize: fonts.textFontSize,
  },
})
