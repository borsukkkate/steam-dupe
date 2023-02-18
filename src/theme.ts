import { extendTheme } from '@chakra-ui/react';
import bg from './assets/bg.webp';
import components from './theme-components';

const a = {
  styles: {
    global: () => ({
      body: {
        backgroundImage: bg,
        bg: '#1b2838',
        color: 'white',
      },
    }),
  },
  components,
};

const theme = extendTheme(a);

export default theme;
