import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TabList, Tab, useMediaQuery, Text } from '@chakra-ui/react';

import Menu from '@/components/common/Menu/Menu';

export interface ITab {
  tabName: string;
  route: string;
}

type Props = {
  tabs: ITab[];
  index: number;
};

const NavigationMenu: React.FC<Props> = ({ tabs, index }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  const linkItem = useMemo(
    () =>
      tabs.map(({ tabName, route }, idx) => (
        <Link to={`../apps/category/${route}`} key={tabName}>
          <Text variant={idx === index ? 'info' : 'secondary-title'}>
            {tabName}
          </Text>
        </Link>
      )),
    [index]
  );

  const linkedTabs = useMemo(
    () =>
      tabs.map(({ tabName, route }) => (
        <Link to={`../apps/category/${route}`} key={tabName}>
          <Tab>{tabName}</Tab>
        </Link>
      )),
    []
  );

  return !isLargerThan800 ? (
    <Menu menuItems={linkItem} />
  ) : (
    <TabList>{linkedTabs}</TabList>
  );
};

export default NavigationMenu;
