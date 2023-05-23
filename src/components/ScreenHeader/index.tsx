import { Center, Heading } from 'native-base'

type Props = {
  title: string
}

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg={'fuchsia.800'} pb={6} pt={16}>
      <Heading fontSize="xl" color={'gray.200'} fontFamily={'heading'}>
        {title}
      </Heading>
    </Center>
  )
}
