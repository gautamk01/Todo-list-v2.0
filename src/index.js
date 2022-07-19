import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-supabase';
import { supabase } from './supabaseClient';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Provider value={supabase}>

      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>


  </StrictMode>
);

