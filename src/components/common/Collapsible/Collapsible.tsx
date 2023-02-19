import React, { ReactElement, useState } from 'react';
import { Button, Collapse, Flex, Text } from '@chakra-ui/react';

type Props = {
  children: ReactElement;
  title?: string;
};

const Collapsible: React.FC<Props> = ({ children, title }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-between'} my={4}>
        {Boolean(title) && <Text variant='title'>{title}</Text>}
        <Button onClick={handleToggle} mt='1rem' variant='secondary'>
          Show {show ? 'Less' : 'More'}
        </Button>
      </Flex>

      <Collapse startingHeight={200} in={show}>
        {children}
      </Collapse>
    </>
  );
};

export default Collapsible;
