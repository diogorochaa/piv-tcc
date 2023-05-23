import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Heading, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

interface MenuHomeProps {
  icon: string
  title: string
  route: () => void
}

export function MenuHome({ icon, title, route }: MenuHomeProps) {
  return (
    <TouchableOpacity onPress={route}>
      <VStack
        w={40}
        h={40}
        bgColor="white"
        rounded="md"
        alignItems="center"
        justifyContent={'center'}
        p={2}
        m={2}
      >
        <MaterialCommunityIcons name={icon} size={60} color="fuchsia" />

        <Heading color="fuchsia.800" fontFamily="heading" fontSize="lg" mt={2}>
          {title}
        </Heading>
      </VStack>
    </TouchableOpacity>
  )
}
