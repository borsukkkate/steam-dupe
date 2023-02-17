import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
