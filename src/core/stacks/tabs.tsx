import React, { type FC, type ReactNode } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'

import { colors } from 'core/theme'
import { ExplorerScreen } from 'features/explorer'
import { WalletScreen } from 'features/wallet'

type IconRenderer = (args: { focused: boolean; color: string; size: number }) => ReactNode

const renderExplorerIcon: IconRenderer = ({ color, size }) => <Entypo size={size} name='globe' color={color} />
const renderWalletIcon: IconRenderer = ({ color, size }) => <Entypo size={size} name='wallet' color={color} />

const Tab = createBottomTabNavigator()

export const Tabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarStyle: { backgroundColor: colors.background.block },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Explorer'
        component={ExplorerScreen}
        options={{
          tabBarIcon: renderExplorerIcon,
        }}
      />

      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          tabBarIcon: renderWalletIcon,
        }}
      />
    </Tab.Navigator>
  )
}
