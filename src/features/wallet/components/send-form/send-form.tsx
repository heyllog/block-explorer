import { FC, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useToast } from 'react-native-toast-notifications'
import { isAddress, parseEther } from 'viem'

import { Button } from 'core/components/button'
import { AppTextInput } from 'core/components/input'
import { InputHeader } from 'core/components/input-header'
import type { UseNavigationType } from 'core/stacks/root'
import { useAppDispatch } from 'core/store/hooks'
import { colors, fonts, sizes } from 'core/theme'

import { sendTx } from '../../store/actions/send-tx'

export const SendForm: FC<ViewProps> = (props) => {
  const [addressTo, setAddressTo] = useState('')
  const [amount, setAmount] = useState('')

  const dispatch = useAppDispatch()
  const toast = useToast()
  const navigation = useNavigation<UseNavigationType>()

  const handleChangeAmount = (text: string) => {
    try {
      parseEther(text)

      setAmount(text)
    } catch (e) {
      // filter incorrect amount
    }
  }

  const handleSend = async (): Promise<void> => {
    try {
      if (!isAddress(addressTo)) {
        toast.show('Incorrect address', { type: 'danger' })

        return
      }

      if (!amount) {
        toast.show('Enter amount', { type: 'danger' })

        return
      }

      const hash = await dispatch(sendTx({ addressTo, amount })).unwrap()

      navigation.navigate('TxSuccess', { hash })
    } catch (e) {
      navigation.navigate('TxError', { error: (e as Error).message })
    }
  }

  return (
    <View {...props}>
      <InputHeader isFilled={!!addressTo} onPaste={setAddressTo} onClear={(): void => setAddressTo('')}>
        To address
      </InputHeader>
      <AppTextInput style={styles.input} value={addressTo} onChangeText={(text) => setAddressTo(text)} />

      <InputHeader isFilled={!!amount} onPaste={handleChangeAmount} onClear={(): void => setAmount('')}>
        Amount
      </InputHeader>
      <AppTextInput style={styles.input} value={amount} onChangeText={handleChangeAmount} />

      <Button onPress={handleSend} style={styles.submitButton}>
        Submit
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
