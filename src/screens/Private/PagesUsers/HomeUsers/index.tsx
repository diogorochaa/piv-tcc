import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HStack, Heading, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'

import { auth } from '../../../../services/firebase'
import { MenuHome } from '../../../../components/MenuHome'
import { UsersRoutesProps } from '../../../../routes/users.routes'

export function HomeUsers() {
  const navigation = useNavigation<UsersRoutesProps>()

  function handleLogout() {
    signOut(auth)
  }

  function handleDoctor() {
    navigation.navigate('doctors')
  }

  function handleClinicDetail() {
    navigation.navigate('clinics')
  }

  function handleSheduling() {
    navigation.navigate('shedulingDetail')
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
        <MenuHome icon="doctor" title="Profissionais" route={handleDoctor} />
        <MenuHome
          icon="file-document-edit"
          title="Prontuário"
          route={handleDoctor}
        />
        <MenuHome
          icon="hospital-building"
          title="Clínicas"
          route={handleClinicDetail}
        />

        <MenuHome icon="book-open" title="Consultas" route={handleSheduling} />
      </HStack>
    </VStack>
  )
}
