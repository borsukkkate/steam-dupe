import { Button } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
  title: string;
  icon?: ReactElement;
  disabled?: boolean;
};

const LinkButton: React.FC<Props> = ({ path, icon, disabled, title }) => (
  <Link to={path} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
    <Button
      size='sm'
      variant='link'
      leftIcon={icon}
      color={'blue.100'}
      fontWeight={400}
      isDisabled={disabled}
    >
      {title}
    </Button>
  </Link>
);

export default LinkButton;
