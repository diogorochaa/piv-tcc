import { useState } from 'react'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { CardUser } from '../../../../components/CardUser'
import { ScreenHeader } from '../../../../components/ScreenHeader'

import { DoctorsRoutesProps } from '../../../../routes/doctors.routes'

export function UsersList() {
  const [listUsers] = useState(['Daniel', 'Diogo', 'Rafael', 'Ricar', 'João'])

  const navigation = useNavigation<DoctorsRoutesProps>()
  function handleNavigateToDoctorDetails() {
    navigation.navigate('userDetail')
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Lista de Pacientes" />
      <HStack justifyContent="space-between" mb={5} mt={5} p={4}>
        <Heading color="gray.700" fontSize="md">
          Pacientes
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {listUsers.length} pacientes
        </Text>
      </HStack>

      <CardUser />
      <FlatList
        data={listUsers}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardUser onPress={handleNavigateToDoctorDetails} />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 20 }}
      />
    </VStack>
  )
}
