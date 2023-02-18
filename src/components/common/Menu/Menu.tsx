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
  <CUIMenu variant='transparent'>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='transparent'
      data-testid='categories-menu-button'
    />
    <MenuList>
      {menuItems.map((mi) => (
        <MenuItem key={uuid()}>{mi}</MenuItem>
      ))}
    </MenuList>
  </CUIMenu>
);

export default Menu;
