import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../../services/firebase'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { Center, TextArea, VStack } from 'native-base'
import { Controller, useForm } from 'react-hook-form'

import { ScreenHeader } from '../../../../components/ScreenHeader'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Alert } from 'react-native'

type RecordType = {
  title: string
  record: string
}

const recordSchema = yup.object({
  title: yup
    .string()
    .min(3, 'Título deve ter no mínimo 3 dígitos.')
    .required('Título é obrigatório.'),
  record: yup
    .string()
    .min(6, 'Prontuário deve ter no mínimo 6 dígitos.')
    .required('Prontuário é obrigatório.'),
})

export function Record() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RecordType>({
    resolver: yupResolver(recordSchema),
  })

  async function salvarProntuario({ title, record }: RecordType) {
    try {
      await setDoc(doc(db, 'records', uuid()), {
        title,
        record,
      })
      Alert.alert('Sucesso!', 'Prontuário salvo com sucesso.')
      reset()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro!', 'Não foi possível salvar o prontuário.')
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Prontuário" />
      <Center flex={1} padding={4}>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Título"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.title?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="record"
          render={({ field: { onChange, value } }) => (
            <TextArea
              h={300}
              placeholder="Prontuário"
              autoCompleteType={false}
              _invalid={{
                borderColor: 'danger.500',
              }}
              onChangeText={onChange}
              value={value}
              mb={4}
            />
          )}
        />
        <Button title="Salvar" onPress={handleSubmit(salvarProntuario)} />
      </Center>
    </VStack>
  )
}
