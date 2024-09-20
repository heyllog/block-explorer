import React, { FC, PropsWithChildren } from 'react'

import { StyleProp, TouchableOpacityProps, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Props extends PropsWithChildren {
  onPress?: () => void | TouchableOpacityProps['onPress'] | undefined
  onLongPress?: () => void
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  hitSlop?: number
}

export const ActiveTouchAction: FC<Props> = ({ onPress, onLongPress, style, disabled, hitSlop, children }) => {
  const pressed = useSharedValue(false)

  const onTouchIn = (): void => {
    pressed.value = true
  }

  const onPressOut = (): void => {
    pressed.value = false
  }

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.96 : 1, { duration: 200 }) }],
  }))

  return (
    <TouchableWithoutFeedback
      onPressOut={onPressOut}
      onPressIn={onTouchIn}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      <Animated.View style={[animatedStyles, style]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  )
}
