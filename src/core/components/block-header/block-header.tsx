import { FC } from 'react'

import { Pressable, StyleSheet, View, ViewProps } from 'react-native'

import { AppText } from 'core/components/text'
import { colors } from 'core/theme'

interface Props extends ViewProps {
  buttonTitle?: string
  onButtonPress?: () => void
}

export const BlockHeader: FC<Props> = ({ style, children, buttonTitle, onButtonPress, ...props }) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...props}>
      <AppText style={styles.inputLabel}>{children}</AppText>

      {buttonTitle && onButtonPress && (
        <Pressable style={styles.rightButton} onPress={onButtonPress}>
          <AppText style={styles.rightButtonText}>{buttonTitle}</AppText>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  inputLabel: {
    color: colors.text.inactive,
    marginLeft: 6,
  },
  rightButton: {
    marginRight: 6,
  },
  rightButtonText: {
    color: colors.text.inactive,
  },
})
