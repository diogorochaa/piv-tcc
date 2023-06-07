import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HStack, Heading, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { signOut } from 'firebase/auth'
import { auth } from '../../../../services/firebase'
import { MenuHome } from '../../../../components/MenuHome'
import { DoctorsRoutesProps } from '../../../../routes/doctors.routes'

export function HomeDoctors() {
  const navigation = useNavigation<DoctorsRoutesProps>()

  function handleLogout() {
    signOut(auth)
  }

  function handleRecords() {
    navigation.navigate('record')
  }

  function handleUsers() {
    navigation.navigate('users')
  }

  function handleShedulingDoctors() {
    navigation.navigate('shedulingDetailDoctors')
  }

  return (
    <VStack flex={1} bg={'fuchsia.800'}>
      <VStack px={8} bg="fuchsia.800" pt={12}>
        <HStack
          justifyContent={'space-between'}
          mt={4}
          mb={8}
          alignItems={'center'}>
          <Heading color="white" fontSize="xl" flexShrink={1}>
            Bem vindo, Diogo
          </Heading>

          <TouchableOpacity onPress={handleLogout}>
            <MaterialCommunityIcons
              name="exit-to-app"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </HStack>
      </VStack>
      <HStack flexWrap={'wrap'} justifyContent={'center'} mt={4}>
        <MenuHome icon="account-group" title="Pacientes" route={handleUsers} />
        <MenuHome
          icon="file-document-edit"
          title="Prontuário"
          route={handleRecords}
        />

        <MenuHome
          icon="book-open"
          title="Consultas"
          route={handleShedulingDoctors}
        />
      </HStack>
    </VStack>
  )
}
