import { Link } from 'react-router-dom';

import { Grid } from '@chakra-ui/react';

import StatefulWrapper from '@/components/common/StatefulWrapper/StatefulWrapper';
import AppListItem from './AppListItem/AppListItem';
import useApps from './hooks/useApps';

const AppsList = () => {
  const { status, apps } = useApps();

  return (
    <StatefulWrapper status={status}>
      <Grid
        gap={5}
        m={0}
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
      >
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
    </StatefulWrapper>
  );
};

export default AppsList;
