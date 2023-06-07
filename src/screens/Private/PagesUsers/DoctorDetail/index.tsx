import React from 'react'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
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

import { UsersRoutesProps } from '../../../../routes/users.routes'
import { Button } from '../../../../components/Button'

export function DoctorDetail() {
  const navigation = useNavigation<UsersRoutesProps>()

  function handleGoBack() {
    navigation.navigate('doctors')
  }
  function handleClinicDetail() {
    navigation.navigate('clinics')
  }
  function handleSheduling() {
    navigation.navigate('shedulingDetail')
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
            Dr. Daniel
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
            alt="Pefil do doutor"
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
                <MaterialCommunityIcons
                  onPress={handleClinicDetail}
                  name="map-marker"
                  size={24}
                  color="#f15454"
                />
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

            <HStack justifyContent={'center'} mb={6}>
              <Feather name="calendar" size={24} color="#f15454" />
              <Text color="black" ml={2}>
                08:00 - 18:00 Segunda a Sexta
              </Text>
            </HStack>
            <Button title="Agendar consulta" onPress={handleSheduling} />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
