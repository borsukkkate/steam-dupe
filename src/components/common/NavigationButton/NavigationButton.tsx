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
      variant='secondary'
      leftIcon={shouldNavigateBack ? <ArrowBackIcon /> : <ArrowRightIcon />}
      onClick={() => goTo(shouldNavigateBack)}
    >
      {shouldNavigateBack ? 'Back' : 'Forward'}
    </Button>
  );
};

export default NavigationButton;
