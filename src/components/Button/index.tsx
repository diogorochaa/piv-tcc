import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'fuchsia.800'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="fuchsia.800"
      rounded="full"
      _pressed={{ bg: variant === 'outline' ? 'fuchsia.200' : 'fuchsia.700' }}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'fuchsia.800' : 'gray.50'}
        fontSize="lg"
        fontFamily="heading"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
