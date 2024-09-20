import { FC } from 'react'

import Clipboard from '@react-native-clipboard/clipboard'
import { ViewProps } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { BlockHeader } from 'core/components/block-header'

interface Props extends ViewProps {
  value?: string
}

export const CopyHeader: FC<Props> = ({ children, value, ...props }) => {
  const toast = useToast()

  const handleCopy = async (): Promise<void> => {
    if (value) {
      Clipboard.setString(value)
      toast.show('Copied!', {
        type: 'success',
      })
    }
  }

  return (
    <BlockHeader buttonTitle={value ? 'Copy' : undefined} onButtonPress={handleCopy} {...props}>
      {children}
    </BlockHeader>
  )
}
