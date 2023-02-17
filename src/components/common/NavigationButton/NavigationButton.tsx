import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

import { Direction } from '@/shared/constants';

type Props = {
  direction: Direction;
};

const NavigationButton: React.FC<Props> = ({ direction }) => {
  const navigate = useNavigate();
  const shouldNavigateBack = direction === Direction.BACK;

  const goTo = (shouldNavigateBack: boolean) => {
    shouldNavigateBack ? navigate(-1) : navigate(+1);
  };

  return (
    <Button
      size='sm'
      variant='link'
      leftIcon={shouldNavigateBack ? <ArrowBackIcon /> : <ArrowRightIcon />}
      color={'blue.100'}
      fontWeight={400}
      onClick={() => goTo(shouldNavigateBack)}
    >
      {shouldNavigateBack ? 'Back' : 'Forward'}
    </Button>
  );
};

export default NavigationButton;
