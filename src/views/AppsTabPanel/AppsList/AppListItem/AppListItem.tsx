import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  ListItem,
  Image,
  useMediaQuery,
  SlideFade,
} from '@chakra-ui/react';

import { IApp } from '@/shared/interfaces';
import PriceTag from '@/components/common/PriceTag/PriceTag';
import AvailablePlatforms from '@/components/Platforms/Platforms';
import CommaSeparatedList from '@/components/common/CommaSeparatedList/CommaSeparatedList';

import { gridLayout } from './layout';

type Props = {
  appInfo: Pick<
    IApp,
    'name' | 'price_overview' | 'header_image' | 'developers' | 'platforms'
  >;
};

const AppListItem: React.FC<Props> = ({
  appInfo: { name, price_overview, header_image, developers, platforms },
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <SlideFade in={isLoaded}>
      <GridItem
        listStyleType='none'
        m={0}
        mb={1}
        bgColor='#ffffff12'
        _hover={{
          backgroundColor: 'whiteAlpha.300',
          transform: 'scale(1.01)',
          transition: 'transform 200ms',
        }}
      >
        <Grid {...gridLayout} gap={4} position={'relative'}>
          <GridItem display='flex' area={'thumbnail'}>
            <Image
              src={header_image}
              alt='app thumbnail image'
              width={['100%']}
              objectFit='contain'
              objectPosition={'left'}
              onLoad={() => setIsLoaded(true)}
            />
          </GridItem>
          <GridItem pl={4} pr={4} area='info'>
            <Text
              fontSize={['m', 'l']}
              fontWeight='semibold'
              color={'blue.100'}
            >
              {name}
            </Text>
            <AvailablePlatforms platforms={platforms} title='Available on: ' />
            <CommaSeparatedList listItems={developers} title='Developed by: ' />
          </GridItem>

          <GridItem
            alignItems={'center'}
            justifyContent={'center'}
            display='flex'
            area={'price'}
          >
            {price_overview && (
              <PriceTag
                price={price_overview.final}
                discount={price_overview.discount_percent}
                oldPrice={price_overview.initial}
                currency={price_overview.currency}
                stick={true}
              />
            )}
          </GridItem>
        </Grid>
      </GridItem>
    </SlideFade>
  );
};

export default AppListItem;
