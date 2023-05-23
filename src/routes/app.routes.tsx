import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import { Chat } from '../screens/Private/Chat'
import { Doctors } from '../screens/Private/Doctors'
import { DoctorDetail } from '../screens/Private/DoctorDetail'
import { Home } from '../screens/Private/Home'
import { Profile } from '../screens/Private/Profile'
import { Queries } from '../screens/Private/Queries'
import { Record } from '../screens/Private/Record'
import { Alert } from '../screens/Private/Alert'
import { Clinics } from '../screens/Private/Clinics'
import { ShedulingDetail } from '../screens/Private/ShedulingDetail'

type AppRoutesType = {
  home: undefined
  profile: undefined
  record: undefined
  queries: undefined
  doctors: undefined
  chat: undefined
  alert: undefined
  doctorDetail: undefined
  clinics: undefined
  shedulingDetail: undefined
}

export type AppRoutesProps = BottomTabNavigationProp<AppRoutesType>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesType>()

function AppRoutes() {
  const { sizes, colors } = useTheme()
  const iconSize = sizes[8]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.fuchsia[800],
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={iconSize} />
          ),
        }}
      />
      <Screen
        name="alert"
        component={Alert}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={iconSize} />
          ),
        }}
      />
      <Screen
        name="doctors"
        component={Doctors}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Screen
        name="record"
        component={Record}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="chat"
        component={Chat}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="queries"
        component={Queries}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="doctorDetail"
        component={DoctorDetail}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="clinics"
        component={Clinics}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="shedulingDetail"
        component={ShedulingDetail}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}

export { AppRoutes }
