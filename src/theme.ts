import { extendTheme } from '@chakra-ui/react';
import bg from './assets/bg.jpg';

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
};

const theme = extendTheme(a);

export default theme;
