import React, { Suspense, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Flex } from '@chakra-ui/react';

import { setActiveCategory, setSearchString } from '@/redux/reducers/appsSlice';
import { AppCategories, Direction } from '@/shared/constants';
import { RootState } from '@/redux/store/store';
import SearchApps from '@/components/SearchApps/SearchApps';
import AppsList from '@/views/AppsTabPanel/AppsList/AppsList';

import NavigationMenu from './NavigationMenu/NavigationMenu';
import NavigationButton from '@/components/common/NavigationButton/NavigationButton';

export interface ITab {
  tabName: string;
  route: string;
}

type Props = {
  appTabs: ITab[];
};

const AppsTabPanel: React.FC<Props> = ({ appTabs }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeCategory = useSelector(
    (state: RootState) => state.apps.activeCategory
  );

  const routes = useMemo(() => appTabs.map((at) => at.route), []);

  useEffect(() => {
    if (routes.every((ac) => ac != category)) {
      navigate(`../apps/category/${routes[0]}`);
      return;
    }

    dispatch(setActiveCategory(category as AppCategories));
    dispatch(setSearchString(''));
  }, [category]);

  const defaultTabIndex = useMemo(() => routes.indexOf(category!), []);

  return (
    <Tabs
      defaultIndex={defaultTabIndex}
      w={['100%', '95%', '85%', '85%', '75%']}
      p={6}
      bg='blackAlpha.700'
      borderRadius={10}
    >
      <>
        <NavigationMenu appTabs={appTabs} />
        <Flex justifyContent={'space-between'}>
          <NavigationButton direction={Direction.BACK} />
          <SearchApps />
        </Flex>
        {activeCategory && (
          <Suspense>
            <AppsList />
          </Suspense>
        )}
      </>
    </Tabs>
  );
};

export default AppsTabPanel;
