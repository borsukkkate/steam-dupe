import React, { ReactElement, Suspense } from 'react';
import { Center } from '@chakra-ui/react';

import Spinner from '@/components/common/Spinner/Spinner';
import { ERROR, PENDING, ApiStatus } from '@/api/constants/apiStatus';
import ErrorFallback from '../ErrorFallback/ErrorFallback';

type Props = {
  status: ApiStatus;
  children: ReactElement;
};

const StatefulWrapper: React.FC<Props> = ({ status, children }) => {
  if (status === PENDING) {
    return (
      <Center m={50} data-testid='loading-spinner'>
        <Spinner show={true} delay={100} />
      </Center>
    );
  }

  if (status === ERROR) {
    return (
      <ErrorFallback
        errorMessage={`EVERYONE MAKES MISTAKES. JUST CHILL A BIT.`}
        enableCapybara
      />
    );
  }

  return (
    <Suspense
      fallback={
        <Center m={50}>
          <Spinner show={true} delay={300} />
        </Center>
      }
    >
      {children}
    </Suspense>
  );
};

export default StatefulWrapper;
