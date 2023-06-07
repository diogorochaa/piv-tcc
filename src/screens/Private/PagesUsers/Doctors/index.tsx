import { useState } from 'react'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { DoctorCard } from '../../../../components/CardUser'
import { ScreenHeader } from '../../../../components/ScreenHeader'

import { AppRoutesProps } from '../../../../routes/app.routes'

export function Doctors() {
  const [listDoctors] = useState(['Daniel', 'Diogo', 'Rafael', 'Ricar', 'João'])

  const navigation = useNavigation<AppRoutesProps>()
  function handleNavigateToDoctorDetails() {
    navigation.navigate('doctorDetail')
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Lista de Médicos" />
      <HStack justifyContent="space-between" mb={5} mt={5} p={4}>
        <Heading color="gray.700" fontSize="md">
          Profissionais
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {listDoctors.length} médicos
        </Text>
      </HStack>

      <DoctorCard />
      <FlatList
        data={listDoctors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <DoctorCard onPress={handleNavigateToDoctorDetails} />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 20 }}
      />
    </VStack>
  )
}
