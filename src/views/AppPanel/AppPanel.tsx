import React, { useEffect } from 'react';
import {
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
import Collapsible from '@/components/common/Collapsible/Collapsible';
import MediaGallery from '@/components/common/MediaGallery/MediaGallery';

import useApp from './hooks/useApp';
import { useSlides } from './hooks/useSlides';

const AppPanel: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = useStyleConfig('Containers', { variant: 'page' });
  const { app, status } = useApp();
  const { slides } = useSlides(app);

  return (
    <StatefulWrapper status={status}>
      <Grid __css={styles} data-testid='app-panel'>
        {app && (
          <>
            <GridItem area={'header'} data-testid='header'>
              <Text variant={'header'}>{app.name}</Text>
            </GridItem>
            <GridItem area={'main'} data-testid='about'>
              <MediaGallery slides={slides} />
              <Collapsible title='About'>
                <Text
                  dangerouslySetInnerHTML={{ __html: app.about_the_game }}
                />
              </Collapsible>
            </GridItem>
            <GridItem area={'aside'} data-testid='app-info'>
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
  );
};

export default AppPanel;
