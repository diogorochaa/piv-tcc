import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Box,
  ScrollView,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { DoctorsRoutesProps } from '../../../../routes/doctors.routes'

export function UserDetail() {
  const navigation = useNavigation<DoctorsRoutesProps>()

  function handleGoBack() {
    navigation.navigate('users')
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="fuchsia.800" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <HStack
          justifyContent={'space-between'}
          mt={4}
          mb={8}
          alignItems={'center'}>
          <Heading color="white" fontSize="lg" flexShrink={1}>
            Daniel
          </Heading>

          <HStack>
            <MaterialCommunityIcons name="star" size={24} color="white" />
            <Text color="white" ml={1} textTransform={'capitalize'}>
              4.5
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            alt="Pefil do usuario"
            h={80}
            source={{ uri: 'https://github.com/diogorochaa.png' }}
            mb={3}
            resizeMode="cover"
            rounded="lg"
            overflow="hidden"
          />
          <Box bg={'gray.200'} rounded={'md'} pb={4} px={4}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={6}
              mt={5}>
              <HStack>
                <Text color="black" ml={2}>
                  Rua dos bobos, 0
                </Text>
              </HStack>
              <HStack>
                <MaterialCommunityIcons
                  name="phone"
                  size={24}
                  color="#f15454"
                />
                <Text ml={2} color="black">
                  54 99999999
                </Text>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
