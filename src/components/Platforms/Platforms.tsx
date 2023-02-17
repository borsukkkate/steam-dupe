import React, { useMemo } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import { IPlatforms } from '@/shared/interfaces';
import { Platforms, platformsIconsMap } from '@/shared/constants';

type Props = {
  platforms: IPlatforms;
  title?: string;
};

const AvailablePlatforms: React.FC<Props> = ({ platforms, title }) => {
  const platformsIcons = useMemo(
    () =>
      Object.entries(platforms)
        .filter(([platformName, isAvailable]) => isAvailable)
        .map(([platformName]) => platformsIconsMap[platformName as Platforms]),
    [platforms]
  );

  return (
    <Flex mt='1' mb='1' alignItems={'center'}>
      {title && (
        <Text fontSize='xs' mr={2} color={'gray.400'}>
          {title}
        </Text>
      )}
      {platformsIcons.map((p) => (
        <Icon key={uuid()} mr={2} viewBox='0 0 20 20'>
          {p}
        </Icon>
      ))}
    </Flex>
  );
};

export default AvailablePlatforms;
