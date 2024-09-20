import React from 'react'

import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack'

import { TxInfoScreen } from 'features/explorer'

import { Tabs } from './tabs'

export type RootStackParamList = {
  Home: undefined
  TxDetails: { hash: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export type UseNavigationType = NativeStackNavigationProp<RootStackParamList>

export const RootStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name='TxDetails' component={TxInfoScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
