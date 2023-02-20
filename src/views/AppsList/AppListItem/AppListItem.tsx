import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Image,
  SlideFade,
  useStyleConfig,
} from '@chakra-ui/react';

import { IApp } from '@/shared/interfaces';
import PriceTag from '@/components/common/PriceTag/PriceTag';
import AvailablePlatforms from '@/components/Platforms/Platforms';
import CommaSeparatedList from '@/components/common/CommaSeparatedList/CommaSeparatedList';

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
  const styles = useStyleConfig('Containers', { variant: 'listItem' });

  return (
    <SlideFade in={isLoaded}>
      <GridItem
        m={0}
        mb={1}
        bgColor='#ffffff12'
        _hover={{
          backgroundColor: 'whiteAlpha.300',
          transform: 'scale(1.01)',
          transition: 'transform 200ms',
        }}
        data-testid='app-list-item'
      >
        <Grid __css={styles} position={'relative'}>
          <GridItem area={'thumbnail'}>
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
            <Text variant={'title'}>{name}</Text>
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
