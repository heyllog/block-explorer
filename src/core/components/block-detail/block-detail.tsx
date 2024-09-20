import React, { FC } from 'react'

import { StyleSheet, type TextProps, View, ViewProps } from 'react-native'

import { Divider } from 'core/components/divider/divider'
import { AppText } from 'core/components/text'
import { fonts } from 'core/theme'

interface ContainerProps extends ViewProps {
  isWithoutDivider?: boolean
}

const Container: FC<ContainerProps> = ({ style, isWithoutDivider, ...props }) => {
  return (
    <>
      <View style={StyleSheet.flatten([styles.block, style])} {...props} />

      {!isWithoutDivider && <Divider />}
    </>
  )
}

const Key: FC<TextProps> = ({ style, ...props }) => {
  return <AppText style={StyleSheet.flatten([styles.key, style])} {...props} />
}

const Value: FC<TextProps> = ({ style, ...props }) => {
  return (
    <AppText style={StyleSheet.flatten([styles.value, style])} ellipsizeMode='middle' numberOfLines={1} {...props} />
  )
}

export const BlockDetail = {
  Container,
  Key,
  Value,
}

export const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  key: {
    fontFamily: fonts.titleFontFamily,
  },
  value: {
    maxWidth: '50%',
  },
})
