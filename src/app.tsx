import React from 'react'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { RootStack } from 'core/stacks/root'
import { store } from 'core/store/store'
import { colors } from 'core/theme'

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: colors.background.main },
        }}
      >
        <RootStack />
      </NavigationContainer>

      <StatusBar barStyle='light-content' />
    </Provider>
  )
}

export default App
