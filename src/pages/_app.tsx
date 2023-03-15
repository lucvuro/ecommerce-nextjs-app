import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { MainLayout } from '@/layouts';
import { wrapper } from '@/store';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default MyApp;
