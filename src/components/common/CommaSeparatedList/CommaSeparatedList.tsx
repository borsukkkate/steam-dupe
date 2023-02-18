import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  listItems: string[];
  title?: string;
};

const CommaSeparatedList: React.FC<Props> = ({ title, listItems }) => {
  return (
    <Flex alignItems='center'>
      {title && (
        <Text variant='secondary-title' mr={2}>
          {title}
        </Text>
      )}
      <Text variant={'info'}>{listItems.join(',')}</Text>
    </Flex>
  );
};

export default CommaSeparatedList;
