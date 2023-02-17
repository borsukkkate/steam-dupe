import React from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

import AvailablePlatforms from '@/components/Platforms/Platforms';
import PriceTag from '@/components/common/PriceTag/PriceTag';
import CommaSeparatedList from '@/components/common/CommaSeparatedList/CommaSeparatedList';
import { IPlatforms, IPriceOverview } from '@/shared/interfaces';

interface IInfo {
  cover: string;
  description: string;
  platforms: IPlatforms;
  developers: string[];
  publishers: string[];
  price_overview: IPriceOverview;
}

type Props = {
  info: IInfo;
};

const AppInfo: React.FC<Props> = ({
  info: {
    cover,
    description,
    platforms,
    developers,
    price_overview,
    publishers,
  },
}) => {
  return (
    <Box>
      <Box position='relative' width={'fit-content'}>
        <Image src={cover} mb={4} />
        {price_overview && (
          <PriceTag
            stick
            price={price_overview.final}
            discount={price_overview.discount_percent}
            oldPrice={price_overview.initial}
            currency={price_overview.currency}
          />
        )}
      </Box>
      <Text
        mb={2}
        fontSize={'sm'}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Stack mt={4}>
        {developers && (
          <CommaSeparatedList listItems={developers} title='Developed by:' />
        )}
        {publishers && (
          <CommaSeparatedList listItems={publishers} title='Published by:' />
        )}
        <AvailablePlatforms platforms={platforms} title='Available on:' />
      </Stack>
    </Box>
  );
};

export default AppInfo;
