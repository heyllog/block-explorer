import React, { FC, PropsWithChildren, useCallback } from 'react'

import { Linking, PressableProps, View, ViewStyle } from 'react-native'

import { styles } from './styles'
import { ActiveTouchAction } from '../active-touch-action'
import { AppText } from '../text'

interface ComponentProps extends PropsWithChildren {
  theme?: 'transparent'
  href?: string
  onPress?: () => void
  disabled?: boolean
  isFullwidth?: boolean
}

export const Button: FC<PressableProps & ComponentProps> = ({
  style,
  children,
  onPress,
  href,
  disabled,
  isFullwidth,
  ...rest
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress()
    }

    if (href) {
      void Linking.openURL(href)
    }
  }, [onPress, href])

  if (rest.theme === 'transparent') {
    return (
      <ActiveTouchAction
        onPress={handlePress}
        style={[isFullwidth && styles.fullwidth, style as ViewStyle]}
        disabled={disabled}
      >
        <View style={[styles.transparentButton, isFullwidth && styles.fullwidth]}>
          <AppText style={[styles.text, styles.transparentButtonText]}>{children}</AppText>
        </View>
      </ActiveTouchAction>
    )
  }

  return (
    <ActiveTouchAction
      onPress={handlePress}
      style={[isFullwidth && styles.fullwidth, disabled && styles.disabledButton, style as ViewStyle]}
      disabled={disabled}
    >
      <View style={[styles.button, isFullwidth && styles.fullwidth]}>
        <AppText style={styles.text}>{children}</AppText>
      </View>
    </ActiveTouchAction>
  )
}
