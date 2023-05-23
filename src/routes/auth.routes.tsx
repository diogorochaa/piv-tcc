import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Login } from '../screens/Public/Login'
import { Register } from '../screens/Public/Register'
import { Reset } from '../screens/Public/Reset'

type AuthRoutesType = {
  login: undefined
  register: undefined
  resetPassword: undefined
}

export type AuthRoutesProps = NativeStackNavigationProp<AuthRoutesType>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>()

function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="resetPassword" component={Reset} />
    </Navigator>
  )
}

export { AuthRoutes }
