import React, { type FC, type ReactNode } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import OctIcon from 'react-native-vector-icons/Octicons'
import { Provider } from 'react-redux'

import { store } from 'core/store/store'
import { colors } from 'core/theme'
import { ExplorerScreen, TxInfoScreen } from 'features/explorer'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

type IconRenderer = (args: { focused: boolean; color: string; size: number }) => ReactNode

const renderIpTrackerIcon: IconRenderer = ({ color, size }) => <OctIcon size={size} name='stack' color={color} />

const Tabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarStyle: { backgroundColor: colors.background.block },
      }}
    >
      <Tab.Screen
        name='Explorer'
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explorer',
          tabBarIcon: renderIpTrackerIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: colors.background.main },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name='TxDetails' component={TxInfoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar barStyle='light-content' />
    </Provider>
  )
}

export default App
