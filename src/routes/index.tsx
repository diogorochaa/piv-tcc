import React, { useEffect, useState } from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../services/firebase'
import { AuthRoutes } from './auth.routes'
import { UsersRoutes } from './users.routes'
// import { DoctorsRoutes } from './doctors.routes'

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[100]

  const [user, setUser] = useState({} as any)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <NavigationContainer theme={theme}>
      <Box flex={1} backgroundColor="background">
        {user ? <UsersRoutes /> : <AuthRoutes />}
      </Box>
    </NavigationContainer>
  )
}
