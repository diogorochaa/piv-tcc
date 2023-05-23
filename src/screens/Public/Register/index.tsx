import { useNavigation } from '@react-navigation/native'
import { Center, Heading, ScrollView, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../services/firebase'
import { collection, addDoc } from 'firebase/firestore'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { AuthRoutesProps } from '../../../routes/auth.routes'

import LogoSvg from '../../../assets/logo.svg'
import { Alert } from 'react-native'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const registerSchema = yup.object({
  name: yup.string().required('Nome é obrigatório.'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório.'),
  password: yup
    .string()
    .required('Senha é obrigatória.')
    .min(6, 'Senha deve ter no mínimo 6 dígitos.'),

  password_confirm: yup
    .string()
    .required('Confirmação de senha é obrigatória.')
    .oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais.'),
})

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
  })

  const navigation = useNavigation<AuthRoutesProps>()

  function handleNavigateToLogin() {
    navigation.navigate('login')
  }

  const handleCreateAccount = async ({
    email,
    name,
    password,
  }: FormDataProps) => {
    try {
      // Criar conta de usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      // Obter o ID do usuário criado
      const userId = userCredential.user.uid

      // Criar um novo documento na coleção "users" com os dados fornecidos
      await addDoc(collection(db, 'users'), {
        userId,
        name,
        email,
      })

      Alert.alert('Sucesso!', 'Conta criada com sucesso!')
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível criar a conta.')
    }
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
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleCreateAccount)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />
          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleCreateAccount)}
          />
        </Center>
        <Button
          title="Voltar para o login"
          variant="outline"
          mt={23}
          onPress={handleNavigateToLogin}
        />
      </VStack>
    </ScrollView>
  )
}
