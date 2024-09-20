import React, { FC } from 'react'

import { StyleSheet, Text, type TextProps } from 'react-native'

import { colors, fonts } from 'core/theme'

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.textFontSize,
    color: colors.text.main,
    fontFamily: fonts.textFontFamily,
  },

  title: {
    fontSize: fonts.titleFontSize,
    color: colors.text.main,
    fontFamily: fonts.titleFontFamily,
  },
})

export const AppText: FC<TextProps> = ({ style, ...props }) => (
  <Text style={StyleSheet.flatten([styles.text, style])} {...props} />
)

export const AppTitle: FC<TextProps> = ({ style, ...props }) => (
  <Text style={StyleSheet.flatten([styles.title, style])} {...props} />
)
