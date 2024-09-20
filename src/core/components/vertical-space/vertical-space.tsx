import { FC } from 'react'

import { View, ViewProps } from 'react-native'

import { sizes } from 'core/theme/sizes'

interface Props extends ViewProps {
  size?: number
}

export const VerticalSpace: FC<Props> = ({ style, size, ...props }) => {
  return <View style={[style, { height: size || sizes.baseIndent }]} {...props} />
}
