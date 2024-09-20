import { FC, useState } from 'react'

import { StyleSheet, View, ViewProps } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { Button } from 'core/components/button'
import { AppTextInput } from 'core/components/input'
import { AppText } from 'core/components/text'
import { useAppDispatch, useAppSelector } from 'core/store/hooks'
import { colors, fonts, sizes } from 'core/theme'

import { SAMPLE_PRIVATE_KEY } from '../../constants'
import { generateAddress } from '../../store/actions/generate-address'
import { selectSendState } from '../../store/selectors'

export const GenerateAddress: FC<ViewProps> = (props) => {
  const { isGeneratingAddress } = useAppSelector(selectSendState)

  const [possiblePk, setPossiblePk] = useState('')

  const dispatch = useAppDispatch()
  const toast = useToast()

  const handleChange = (text: string): void => setPossiblePk(text)
  const handleSetDefault = (): void => setPossiblePk(SAMPLE_PRIVATE_KEY)

  const handleGenerate = async (): Promise<void> => {
    if (!possiblePk) {
      toast.show('Enter a private key', { type: 'danger' })

      return
    }

    try {
      await dispatch(generateAddress(possiblePk)).unwrap()
      toast.show('Account generated', { type: 'success' })
    } catch (e) {
      toast.show('Incorrect private key', { type: 'danger' })
    }
  }

  return (
    <View {...props}>
      <AppText style={styles.inputLabel}>Private key</AppText>
      <AppTextInput
        style={styles.input}
        value={possiblePk}
        onChangeText={handleChange}
        editable={!isGeneratingAddress}
      />

      <Button onPress={handleGenerate} style={styles.submitButton} disabled={isGeneratingAddress}>
        {isGeneratingAddress ? 'Loading...' : 'Generate address'}
      </Button>

      <Button onPress={handleSetDefault} theme='transparent' style={styles.defaultButton}>
        <AppText style={styles.defaultButtonText}>Set default private key</AppText>
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
