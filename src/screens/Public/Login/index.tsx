import { useNavigation } from '@react-navigation/native'
import { Center, Heading, ScrollView, Text, VStack } from 'native-base'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../../services/firebase'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { AuthRoutesProps } from '../../../routes/auth.routes'

import LogoSvg from '../../../assets/logo.svg'
import { Alert } from 'react-native'

type FormDataLoginProps = {
  email: string
  password: string
}

const registerSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório.'),
  password: yup
    .string()
    .required('Senha é obrigatória.')
    .min(6, 'Senha deve ter no mínimo 6 dígitos.'),
})

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLoginProps>({
    resolver: yupResolver(registerSchema),
  })

  const navigation = useNavigation<AuthRoutesProps>()

  function handleNavigateToRegister() {
    navigation.navigate('register')
  }

  function handleNavigateToReset() {
    navigation.navigate('resetPassword')
  }

  function handleLogin({ email, password }: FormDataLoginProps) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })

      .catch((error) => {
        Alert.alert('Erro!', 'E-mail ou senha inválidos.')
        console.log(error)
      })
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <LogoSvg />
        <Center>
          <Heading
            mb={6}
            fontSize="xl"
            color="fuchsia.800"
            fontFamily="heading">
            Acesse sua conta
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
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                onSubmitEditing={handleSubmit(handleLogin)}
                returnKeyType="send"
              />
            )}
          />
          <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
        </Center>
        <Center mt={14}>
          <Text fontSize="sm" color="fuchsia.800" mb={3}>
            Ainda não possui uma conta?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNavigateToRegister}
          />
        </Center>
        <Center mt={14}>
          <Text fontSize="sm" color="fuchsia.800" mb={3}>
            Esqueceu sua senha?
          </Text>
          <Button
            title="Recuperar senha"
            variant="outline"
            onPress={handleNavigateToReset}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
