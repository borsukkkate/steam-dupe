import { useNavigate, useParams } from 'react-router-dom';

import { Flex, Tabs } from '@chakra-ui/react';

import { AppCategories, appTabs, Direction } from '@/shared/constants';
import NavigationMenu from '@/views/TabsPanel/NavigationMenu/NavigationMenu';
import { useMemo, useEffect, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory, setSearchString } from '@/redux/reducers/appsSlice';
import NavigationButton from '@/components/common/NavigationButton/NavigationButton';

const useRouting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, appId } = useParams();

  const routes = useMemo(() => appTabs.map((at) => at.route), []);

  useEffect(() => {
    if (category && !appId && routes.every((ac) => ac != category)) {
      navigate(`../apps/category/${routes[0]}`);
      return;
    }

    dispatch(setActiveCategory(category as AppCategories));
    dispatch(setSearchString(''));
  }, [category, appId]);

  const tabIndex = useMemo(
    () => routes.indexOf(category as AppCategories),
    [category]
  );

  return { tabIndex };
};

type Props = {
  children: ReactElement;
};

const TabsPanel: React.FC<Props> = ({ children }) => {
  const { tabIndex } = useRouting();

  return (
    <Tabs variant='default' index={tabIndex}>
      <>
        <Flex justifyContent={'space-between'} my={4}>
          <NavigationButton direction={Direction.BACK} />
          <NavigationMenu appTabs={appTabs} index={tabIndex} />
        </Flex>
        {children}
      </>
    </Tabs>
  );
};

export default TabsPanel;
