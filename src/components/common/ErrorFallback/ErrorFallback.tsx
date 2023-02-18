import { Center, Text, Image } from '@chakra-ui/react';

import capybara from '@/assets/capybara.webp';

type Props = {
  errorMessage: string;
  enableCapybara?: boolean;
};

const ErrorFallback: React.FC<Props> = ({
  errorMessage,
  enableCapybara = false,
}) => (
  <Center flexDirection={'column'} data-testid='error-fallback'>
    <Text variant='header' textAlign='center'>
      {errorMessage}
    </Text>
    {enableCapybara && <Image src={capybara} w={'600px'} borderRadius='full' />}
  </Center>
);

export default ErrorFallback;
