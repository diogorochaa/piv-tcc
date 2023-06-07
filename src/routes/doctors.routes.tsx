import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import { Profile } from '../screens/Private/PagesDoctors/Profile'
import { ShedulingDetail } from '../screens/Private/PagesDoctors/ShedulingDetailDoctors'
import { Record } from '../screens/Private/PagesDoctors/Record'
import { HomeDoctors } from '../screens/Private/PagesDoctors/HomeDoctors'
import { UserDetail } from '../screens/Private/PagesDoctors/UserDetail'
import { UsersList } from '../screens/Private/PagesDoctors/Users'

type DoctorsRoutesType = {
  profile: undefined
  record: undefined
  shedulingDetailDoctors: undefined
  home: undefined
  userDetail: undefined
  users: undefined
}

export type DoctorsRoutesProps = BottomTabNavigationProp<DoctorsRoutesType>

const { Navigator, Screen } = createBottomTabNavigator<DoctorsRoutesType>()

function DoctorsRoutes() {
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
        component={HomeDoctors}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={iconSize} />
          ),
        }}
      />

      <Screen
        name="record"
        component={Record}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-edit"
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
        name="userDetail"
        component={UserDetail}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="shedulingDetailDoctors"
        component={ShedulingDetail}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="users"
        component={UsersList}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}

export { DoctorsRoutes }
