import { Center, Text } from '@chakra-ui/react';

import capybara from '@/assets/capybara.gif';

type Props = {
  errorMessage: string;
  enableCapybara?: boolean;
};

const ErrorFallback: React.FC<Props> = ({
  errorMessage,
  enableCapybara = false,
}) => (
  <Center flexDirection={'column'} data-testid='error-fallback'>
    <Text fontSize={'s'} textAlign='center'>
      {errorMessage}
    </Text>
    {enableCapybara && <img src={capybara} />}
  </Center>
);

export default ErrorFallback;
