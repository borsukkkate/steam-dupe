import { Link } from 'react-router-dom';

import { Flex, Grid, useStyleConfig } from '@chakra-ui/react';

import StatefulWrapper from '@/components/common/StatefulWrapper/StatefulWrapper';
import AppListItem from './AppListItem/AppListItem';
import useApps from './hooks/useApps';
import SearchInput from '@/components/common/SearchInput/SearchInput';

const AppsList = () => {
  const { status, apps, onAppSearch, appSearchString } = useApps();
  const styles = useStyleConfig('Containers', { variant: 'list' });

  return (
    <StatefulWrapper status={status}>
      <>
        <Flex my={4}>
          <SearchInput
            onInputChange={onAppSearch}
            searchString={appSearchString}
            placeholder='Search app'
          />
        </Flex>
        <Grid __css={styles} data-testid='app-list'>
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
