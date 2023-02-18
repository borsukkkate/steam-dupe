import { Link } from 'react-router-dom';

import { Grid, useStyleConfig } from '@chakra-ui/react';

import StatefulWrapper from '@/components/common/StatefulWrapper/StatefulWrapper';
import AppListItem from './AppListItem/AppListItem';
import useApps from './hooks/useApps';
import SearchApps from '@/components/SearchApps/SearchApps';

const AppsList = () => {
  const { status, apps } = useApps();
  const styles = useStyleConfig('Containers', { variant: 'list' });

  return (
    <StatefulWrapper status={status}>
      <>
        <SearchApps />
        <Grid __css={styles}>
          {apps.map(
            ({
              _id,
              name,
              price_overview,
              header_image,
              platforms,
              developers,
            }) => (
              <Link to={`/app/${_id}`} key={_id}>
                <AppListItem
                  appInfo={{
                    name,
                    price_overview,
                    header_image,
                    platforms,
                    developers,
                  }}
                />
              </Link>
            )
          )}
        </Grid>
      </>
    </StatefulWrapper>
  );
};

export default AppsList;
