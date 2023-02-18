import React, { useEffect } from 'react';
import {
  Center,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import StatefulWrapper from '@/components/common/StatefulWrapper/StatefulWrapper';
import AppInfo from '@/views/AppPanel/AppInfo/AppInfo';
import CollapsibleText from '@/components/common/CollapsibleText/CollapsibleText';
import MediaGallery from '@/components/common/MediaGallery/MediaGallery';

import useApp from './hooks/useApp';
import { useSlides } from './hooks/useSlides';

const AppPanel: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const styles = useStyleConfig('Containers', { variant: 'page' });
  const { app, status } = useApp();
  const { slides } = useSlides(app);

  return (
    <Center>
      <StatefulWrapper status={status}>
        <Grid __css={styles}>
          {app && (
            <>
              <GridItem area={'header'}>
                <Text variant={'header'}>{app.name}</Text>
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
                <Text variant={'title'} mb={2} mt={4}>
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
