import React from 'react';
import { Link } from 'react-router-dom';
import { TabList, Tab, useMediaQuery, Text } from '@chakra-ui/react';

import Menu from '@/components/common/Menu/Menu';

type Props = {
  appTabs: any[];
  index: number;
};

const NavigationMenu: React.FC<Props> = ({ appTabs, index }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  const getLinks = (tabbed: boolean) =>
    appTabs.map(({ tabName, route }, idx) => (
      <Link to={`../apps/category/${route}`} key={tabName}>
        {tabbed ? (
          <Tab>{tabName}</Tab>
        ) : (
          <Text variant={idx === index ? 'info' : 'secondary-title'}>
            {tabName}
          </Text>
        )}
      </Link>
    ));

  return (
    <>
      {!isLargerThan800 ? (
        <Menu menuItems={getLinks(false)} />
      ) : (
        <TabList>{getLinks(true)}</TabList>
      )}
    </>
  );
};

export default NavigationMenu;
