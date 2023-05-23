import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {}

export function DoctorCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.200" alignItems="center" p={4} rounded="md" mb={3}>
        <Image
          source={{ uri: 'https://github.com/diogorochaa.png' }}
          alt="Doctor profile"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg">Diogo Rocha</Heading>
          <Text fontSize="sm" color="gray.800" mt={1} numberOfLines={2}>
            Cardiologista
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-right" color="gray.500" />
      </HStack>
    </TouchableOpacity>
  )
}
