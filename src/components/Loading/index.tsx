import { Center, Spinner } from 'native-base'

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner color="secondary.400" accessibilityLabel="Loading posts" />
    </Center>
  )
}
