import { IInputProps, Input as NativeBaseInput, FormControl } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.50"
        h={14}
        px={4}
        borderWidth={2}
        fontSize="md"
        color="gray.800"
        placeholderTextColor="gray.400"
        isInvalid={invalid}
        _invalid={{
          borderColor: 'red.500',
          borderWidth: 2,
        }}
        _focus={{
          bg: 'gray.100',
          borderWidth: 2,
          borderColor: 'fuchsia.800',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
