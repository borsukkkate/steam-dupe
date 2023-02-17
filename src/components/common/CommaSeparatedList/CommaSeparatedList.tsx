import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  listItems: string[];
  title?: string;
};

const CommaSeparatedList: React.FC<Props> = ({ title, listItems }) => {
  return (
    <Flex alignItems={'center'}>
      {title && (
        <Text fontSize='xs' mr={2} color={'gray.400'}>
          {title}
        </Text>
      )}
      <Text fontSize='sm' color={'blue.300'} fontWeight={500}>
        {listItems.join(',')}
      </Text>
    </Flex>
  );
};

export default CommaSeparatedList;
