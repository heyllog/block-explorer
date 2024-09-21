import React from 'react'

import type { RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Platform } from 'react-native'

import { TxInfoScreen } from 'features/explorer'
import { SendScreen, TxErrorScreen, TxSuccessScreen } from 'features/wallet'

import { Tabs } from './tabs'
import {colors} from "core/theme";

export type RootStackParamList = {
  Tabs: undefined
  Explorer: undefined
  Wallet: undefined
  TxDetails: { hash: string }
  TxSuccess: { hash: string }
  TxError: { error: string }
  Send: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export type UseNavigationType = NativeStackNavigationProp<RootStackParamList>
export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>

export const RootStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationDuration: 250,
        gestureEnabled: false,
        animation: Platform.OS === 'android' ? 'slide_from_right' : 'default',
        headerShown: false,
        navigationBarColor: colors.background.block,
      }}
    >
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name='TxDetails' component={TxInfoScreen} />
      <Stack.Screen name='Send' component={SendScreen} />
      <Stack.Screen name='TxSuccess' component={TxSuccessScreen} />
      <Stack.Screen name='TxError' component={TxErrorScreen} />
    </Stack.Navigator>
  )
}
