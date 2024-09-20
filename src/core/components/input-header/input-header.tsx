import { FC, useMemo } from 'react'

import Clipboard from '@react-native-clipboard/clipboard'
import { ViewProps } from 'react-native'

import { BlockHeader } from 'core/components/block-header'

interface Props extends ViewProps {
  isFilled: boolean
  onPaste?: (value: string) => void
  onClear?: () => void
}

export const InputHeader: FC<Props> = ({ children, isFilled, onPaste, onClear, ...props }) => {
  const handlePaste = async (): Promise<void> => {
    if (onPaste) {
      const data = await Clipboard.getString()

      onPaste(data)
    }
  }

  const buttonTitle = useMemo(() => {
    if (!isFilled && onPaste) return 'Paste'

    if (isFilled && onClear) return 'Clear'
  }, [isFilled, onClear, onPaste])

  const onButtonPress = (): void => {
    if (!isFilled && onPaste) void handlePaste()

    if (isFilled && onClear) onClear()
  }

  return (
    <BlockHeader buttonTitle={buttonTitle} onButtonPress={onButtonPress} {...props}>
      {children}
    </BlockHeader>
  )
}
