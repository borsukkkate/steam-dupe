import { HamburgerIcon } from '@chakra-ui/icons';
import {
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Menu as CUIMenu,
} from '@chakra-ui/react';

import { v4 as uuid } from 'uuid';

type Props = {
  menuItems: any[];
};

const Menu: React.FC<Props> = ({ menuItems }) => (
  <CUIMenu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline'
      bg='blackAlpha.900'
      _active={{ bg: 'blackAlpha.900' }}
      borderColor={'whiteAlpha.400'}
      data-testid='categories-menu-button'
    />
    <MenuList bg='blackAlpha.900' borderColor={'whiteAlpha.400'}>
      {menuItems.map((mi) => (
        <MenuItem key={uuid()} bg='blackAlpha.900'>
          {mi}
        </MenuItem>
      ))}
    </MenuList>
  </CUIMenu>
);

export default Menu;
