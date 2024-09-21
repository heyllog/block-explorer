import React, { useEffect } from 'react'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider } from 'react-redux'

import { RootStack } from 'core/stacks/root'
import { store } from 'core/store/store'
import { colors } from 'core/theme'

const App = (): React.JSX.Element => {
  useEffect(() => {
    void BootSplash.hide()
  }, [])

  return (
    <Provider store={store}>
      <ToastProvider placement='top' duration={1000}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: { ...DefaultTheme.colors, background: colors.background.main },
          }}
        >
          <RootStack />

          <StatusBar backgroundColor={colors.background.main} barStyle='light-content' />
        </NavigationContainer>
      </ToastProvider>
    </Provider>
  )
}

export default App
