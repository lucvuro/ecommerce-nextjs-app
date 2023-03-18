import '../styles/global.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { LoadingPersist } from '@/components/common';
import { MainLayout } from '@/layouts';
import { wrapper } from '@/store';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingPersist />}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
