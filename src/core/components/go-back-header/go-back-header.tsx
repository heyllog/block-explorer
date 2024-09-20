import { FC } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import OctIcon from 'react-native-vector-icons/Octicons'

import { ActiveTouchAction } from 'core/components/active-touch-action'
import { AppTitle } from 'core/components/text'
import { colors, sizes } from 'core/theme'

interface Props {
  title: string
}

export const GoBackHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <ActiveTouchAction onPress={navigation.goBack}>
        <OctIcon name='arrow-left' size={24} style={styles.backIcon} />
      </ActiveTouchAction>

      <AppTitle>{title}</AppTitle>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: sizes.pagePaddingVertical,
    paddingBottom: sizes.blockPaddingVertical,
  },
  backIcon: {
    color: colors.text.main,
    marginRight: sizes.blockPaddingVertical,
  },
})
