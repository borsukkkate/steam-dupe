import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Center,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { ArrowBackIcon, CheckCircleIcon } from '@chakra-ui/icons';

import { RootState } from '@/redux/store/store';
import StatefulWrapper from '@/components/common/StatefulWrapper/StatefulWrapper';
import AppInfo from '@/views/AppPanel/AppInfo/AppInfo';
import CollapsibleText from '@/components/common/CollapsibleText/CollapsibleText';
import LinkButton from '@/components/common/LinkButton/LinkButton';
import MediaGallery from '@/components/common/MediaGallery/MediaGallery';

import useApp from './hooks/useApp';
import { useSlides } from './hooks/useSlides';
import gridLayout from './layout';
import NavigationButton from '@/components/common/NavigationButton/NavigationButton';
import { Direction } from '@/shared/constants';

const AppPanel: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const activeCategory = useSelector(
    (state: RootState) => state.apps.activeCategory
  );

  const { app, status } = useApp();
  const { slides } = useSlides(app);

  return (
    <Center>
      <StatefulWrapper status={status}>
        <Grid {...gridLayout} p={6} bg='blackAlpha.700' borderRadius={10}>
          {app && (
            <>
              <GridItem area={'header'}>
                <NavigationButton direction={Direction.BACK} />
                <Text
                  fontSize={['xl', 'xl', '2xl', '3xl', '4xl']}
                  fontWeight={600}
                  color={'blue.200'}
                >
                  {app.name}
                </Text>
              </GridItem>
              <GridItem area={'main'}>
                <MediaGallery slides={slides} />
                <CollapsibleText text={app.about_the_game} title='About' />
              </GridItem>
              <GridItem area={'aside'}>
                <AppInfo
                  info={{
                    cover: app.header_image,
                    description: app.short_description,
                    platforms: app.platforms,
                    developers: app.developers,
                    price_overview: app.price_overview,
                    publishers: app.publishers,
                  }}
                />
                <Text
                  fontSize={'xl'}
                  fontWeight={500}
                  color={'blue.100'}
                  mb={2}
                  mt={4}
                >
                  Is this game relevant to you?
                </Text>
                <List>
                  {app.categories.map((c) => (
                    <ListItem key={c.id} p={2} background={'#bee3f81a'} mb={2}>
                      <ListIcon as={CheckCircleIcon} color='blue.300' />
                      {c.description}
                    </ListItem>
                  ))}
                </List>
              </GridItem>
            </>
          )}
        </Grid>
      </StatefulWrapper>
    </Center>
  );
};

export default AppPanel;
