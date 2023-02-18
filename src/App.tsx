import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { Box, useStyleConfig } from '@chakra-ui/react';

import { appTabs } from '@/shared/constants';
import AppsList from '@/views/AppsList/AppsList';
import AppPanel from '@/views/AppPanel/AppPanel';
import TabsPanel from '@/views/TabsPanel/TabsPanel';

function App() {
  const styles = useStyleConfig('Containers', { variant: 'main' });
  const activeCategory = useSelector(
    (state: RootState) => state.apps.activeCategory
  );

  return (
    <Box __css={styles}>
      <Routes>
        <>
          <Route
            path='/apps/category/:category'
            element={
              <TabsPanel>
                <Suspense>{activeCategory && <AppsList />}</Suspense>
              </TabsPanel>
            }
          />
          <Route
            path='/app/:appId'
            element={
              <TabsPanel>
                <AppPanel />
              </TabsPanel>
            }
          />
          ;
          <Route
            path='*'
            element={<Navigate to={`/apps/category/${appTabs[0].route}`} />}
          />
        </>
      </Routes>
    </Box>
  );
}

export default App;
