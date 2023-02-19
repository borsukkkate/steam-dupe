import { ReactElement } from 'react';
import { Flex, Tabs } from '@chakra-ui/react';

import { appTabs, Direction } from '@/shared/constants';
import NavigationMenu from '@/views/TabsPanel/NavigationMenu/NavigationMenu';
import NavigationButton from '@/components/common/NavigationButton/NavigationButton';
import useRouting from './hooks/useRouting';

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
          <NavigationMenu tabs={appTabs} index={tabIndex} />
        </Flex>
        {children}
      </>
    </Tabs>
  );
};

export default TabsPanel;
