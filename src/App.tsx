import { Navigate, Route, Routes } from 'react-router-dom';

import { Box, Center } from '@chakra-ui/react';

import { appTabs } from '@/shared/constants';
import AppsTabPanel from '@/views/AppsTabPanel/AppsTabPanel';
import AppPanel from '@/views/AppPanel/AppPanel';

function App() {
  return (
    <Box w='100%' h='100%' p={6}>
      <Center>
        <Routes>
          <Route
            path='/category/:category'
            element={<AppsTabPanel appTabs={appTabs} />}
          />
          <Route path='/app/:appId' element={<AppPanel />} />;
          <Route
            path='*'
            element={<Navigate to={`/category/${appTabs[0].route}`} />}
          />
        </Routes>
      </Center>
    </Box>
  );
}

export default App;
