import { VStack, HStack, Heading, Text } from 'native-base'

export function NotificationsCard() {
  return (
    <HStack
      w="full"
      px={10}
      py={4}
      mb={3}
      bg={'fuchsia.900'}
      rounded={'md'}
      alignItems={'center'}
    >
      <VStack mr={5} flex={1}>
        <Heading
          fontSize="md"
          color={'gray.200'}
          textTransform={'capitalize'}
          numberOfLines={1}
        >
          Agendou!
        </Heading>

        <Text color={'gray.100'} fontSize={'lg'} numberOfLines={1}>
          Você tem uma consulta marcada para amanhã às 10:00
        </Text>
      </VStack>

      <Text color={'gray.300'} fontSize={'md'}>
        10:00
      </Text>
    </HStack>
  )
}
