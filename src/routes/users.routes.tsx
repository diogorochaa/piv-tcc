import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import { Doctors } from '../screens/Private/PagesUsers/Doctors'
import { DoctorDetail } from '../screens/Private/PagesUsers/DoctorDetail'
import { Home } from '../screens/Private/PagesUsers/HomeUsers'
import { Clinics } from '../screens/Private/PagesUsers/Clinics'
import { ShedulingDetail } from '../screens/Private/PagesUsers/ShedulingDetail'

type UsersRoutesType = {
  home: undefined
  doctors: undefined
  doctorDetail: undefined
  clinics: undefined
  shedulingDetail: undefined
}

export type UsersRoutesProps = BottomTabNavigationProp<UsersRoutesType>

const { Navigator, Screen } = createBottomTabNavigator<UsersRoutesType>()

function UsersRoutes() {
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
      }}>
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

export { UsersRoutes }
