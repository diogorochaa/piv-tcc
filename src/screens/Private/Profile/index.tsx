import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Center, ScrollView, VStack, Skeleton, Heading } from 'native-base'
import * as ImagePicker from 'expo-image-picker'

import { ScreenHeader } from '../../../components/ScreenHeader'
import { UserPhoto } from '../../../components/UserPhoto'

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('')

  async function handleSelectImage() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })
      if (photoSelected.canceled) {
        return
      }
      if (photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
        <Center mt={10} px={6}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor={'fuchsia.400'}
              endColor={'fuchsia.500'}
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="User profile"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleSelectImage}>
            <Heading
              color="fuchsia.800"
              fontWeight={'bold'}
              mt={12}
              mb={2}
              fontSize="md"
              alignSelf={'flex-start'}
            >
              Alterar foto
            </Heading>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  )
}
