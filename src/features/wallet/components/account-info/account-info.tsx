import { FC } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, ViewProps } from 'react-native'

import { Block } from 'core/components/block'
import { Button } from 'core/components/button'
import { CopyHeader } from 'core/components/copy-header'
import { AppText } from 'core/components/text'
import type { UseNavigationType } from 'core/stacks/root'
import { useAppDispatch, useAppSelector } from 'core/store/hooks'
import { colors, fonts, sizes } from 'core/theme'

import { selectSendState } from '../../store/selectors'
import { resetWalletState } from '../../store/slice'

export const AccountInfo: FC<ViewProps> = (props) => {
  const { address, privateKey, balance } = useAppSelector(selectSendState)

  const dispatch = useAppDispatch()
  const navigation = useNavigation<UseNavigationType>()

  const handleSend = (): void => navigation.navigate('Send')

  const handleResetAccount = (): void => {
    void dispatch(resetWalletState())
  }

  return (
    <View {...props}>
      <CopyHeader value={privateKey} style={styles.inputLabel}>
        Private key
      </CopyHeader>

      <Block style={styles.input}>
        <AppText numberOfLines={1} ellipsizeMode='tail'>
          {privateKey}
        </AppText>
      </Block>

      <CopyHeader value={address} style={styles.inputLabel}>
        Address
      </CopyHeader>

      <Block style={styles.input}>
        <AppText numberOfLines={1} ellipsizeMode='tail'>
          {address}
        </AppText>
      </Block>

      <CopyHeader style={styles.inputLabel}>Balance</CopyHeader>

      <Block style={styles.input}>
        <AppText numberOfLines={1} ellipsizeMode='tail'>
          {balance}
        </AppText>
      </Block>

      <Button onPress={handleSend} style={styles.submitButton}>
        Send ETH (Sepolia)
      </Button>

      <Button onPress={handleResetAccount} theme='transparent' style={styles.defaultButton}>
        <AppText style={styles.defaultButtonText}>Choose another private key</AppText>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    color: colors.text.inactive,
    marginBottom: 6,
    marginLeft: 6,
  },
  input: {
    marginBottom: sizes.baseIndent,
  },
  errorMessage: {
    textAlign: 'center',
    color: colors.error.main,
    marginBottom: sizes.baseIndent,
  },
  submitButton: {
    marginTop: sizes.baseIndent,
    marginBottom: sizes.baseIndent,
  },
  defaultButton: {
    marginBottom: sizes.baseIndent,
  },
  defaultButtonText: {
    fontSize: fonts.textFontSize - 2,
    color: colors.text.inactive,
  },
})
