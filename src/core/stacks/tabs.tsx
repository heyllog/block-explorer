import React, { type FC, type ReactNode } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OctIcon from 'react-native-vector-icons/Octicons'

import { colors } from 'core/theme'
import { ExplorerScreen } from 'features/explorer'
import { WalletScreen } from 'features/wallet'

type IconRenderer = (args: { focused: boolean; color: string; size: number }) => ReactNode

const renderIpTrackerIcon: IconRenderer = ({ color, size }) => <OctIcon size={size} name='stack' color={color} />

const Tab = createBottomTabNavigator()

export const Tabs: FC = () => {
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
          tabBarIcon: renderIpTrackerIcon,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          tabBarIcon: renderIpTrackerIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
