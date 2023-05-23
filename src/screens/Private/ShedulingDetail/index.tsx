import React from 'react'
import { HStack, Heading, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Calendar } from '../../../components/Calendar'

import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppRoutesProps } from '../../../routes/app.routes'

export function ShedulingDetail() {
  const navigation = useNavigation<AppRoutesProps>()

  function handleGoBack() {
    navigation.navigate('doctorDetail')
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="fuchsia.800" pt={12}>
        <HStack>
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </HStack>
        <HStack justifyContent={'center'} mt={4} mb={8} alignItems={'center'}>
          <Heading color="white" fontSize="lg">
            Vamos agendar?
          </Heading>
        </HStack>
      </VStack>
      <Calendar />
    </VStack>
  )
}
