import { StyleSheet } from 'react-native'

import { colors, fonts, sizes } from 'core/theme'

export const styles = StyleSheet.create({
  // Classic styles
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.buttonPaddingVertical,
    paddingHorizontal: sizes.buttonPaddingHorizontal,
    borderRadius: sizes.buttonBorderRadius,
    backgroundColor: colors.primary.main,
  },
  text: {
    fontFamily: fonts.titleFontFamily,
    fontSize: fonts.textFontSize,
    color: colors.text.main,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.7,
  },

  // Transparent styles
  transparentButton: {
    paddingVertical: 6,
    paddingHorizontal: sizes.buttonPaddingHorizontal,
  },
  transparentButtonText: {
    color: colors.text.inactive,
    fontSize: fonts.textFontSize,
  },

  // Fullwidth
  fullwidth: {
    width: '100%',
  },
})
