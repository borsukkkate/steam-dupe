import React, { useState } from 'react';
import { Button, Collapse, Flex, Text } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

type Props = {
  text: string;
  title?: string;
};

const CollapsibleText: React.FC<Props> = ({ text, title }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  /* 
    NOTE: using dangerouslySetInnerHTML - is not the best option due to possible XSS attack
    As the alternative - to use external library

    OR THE BEST SOLUTION IS:

    Refactoring incoming data to be sent in different format
   */

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-between'} my={4}>
        {Boolean(title) && <Text variant='title'>{title}</Text>}
        <Button onClick={handleToggle} mt='1rem' variant='secondary'>
          Show {show ? 'Less' : 'More'}
        </Button>
      </Flex>

      <Collapse startingHeight={200} in={show}>
        <Text key={uuid()} mb={2} dangerouslySetInnerHTML={{ __html: text }} />
      </Collapse>
    </>
  );
};

export default CollapsibleText;
