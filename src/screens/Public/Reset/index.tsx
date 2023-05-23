import { useNavigation } from '@react-navigation/native'
import { Center, Heading, ScrollView, VStack } from 'native-base'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '../../../services/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { AuthRoutesProps } from '../../../routes/auth.routes'

import LogoSvg from '../../../assets/logo.svg'
import { Alert } from 'react-native'

type FormDataResetProps = {
  email: string
}

const registerSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório.'),
})

export function Reset() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataResetProps>({
    resolver: yupResolver(registerSchema),
  })

  const navigation = useNavigation<AuthRoutesProps>()

  function handleNavigateToLogin() {
    navigation.navigate('login')
  }

  function handleResetPassword({ email }: FormDataResetProps) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('E-mail enviado com sucesso!')
        navigation.navigate('login')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        Alert.alert(errorCode, errorMessage)
      })
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <LogoSvg />
        <Center>
          <Heading
            mb={6}
            fontSize="xl"
            color="fuchsia.800"
            fontFamily="heading"
          >
            Digite seu e-mail
          </Heading>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                returnKeyType="send"
              />
            )}
          />

          <Button title="Enviar" onPress={handleSubmit(handleResetPassword)} />
          <Button
            title="Voltar para o login"
            variant="outline"
            mt={23}
            onPress={handleNavigateToLogin}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
