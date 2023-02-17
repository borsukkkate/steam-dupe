import React from 'react';
import { Link } from 'react-router-dom';
import { TabList, Tab, useMediaQuery } from '@chakra-ui/react';

import Menu from '@/components/common/Menu/Menu';
import { ITab } from '@/views/AppsTabPanel/AppsTabPanel';

type Props = {
  appTabs: ITab[];
};

const NavigationMenu: React.FC<Props> = ({ appTabs }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  const getLinks = (tabbed: boolean) =>
    appTabs.map(({ tabName, route }) => (
      <Link to={`../category/${route}`} key={tabName}>
        {tabbed ? (
          <Tab
            color={'blue.100'}
            _selected={{
              color: 'blue.200',
              borderBottom: '2px solid var(--chakra-colors-blue-200)',
              fontWeight: 600,
            }}
          >
            {tabName}
          </Tab>
        ) : (
          tabName
        )}
      </Link>
    ));

  return (
    <>
      {!isLargerThan800 ? (
        <Menu menuItems={getLinks(false)} />
      ) : (
        <TabList borderBottom={'1px solid var(--chakra-colors-whiteAlpha-400)'}>
          {getLinks(true)}
        </TabList>
      )}
    </>
  );
};

export default NavigationMenu;
