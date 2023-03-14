import '../styles/global.css';

import type { AppProps } from 'next/app';

import { MainLayout } from '@/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default MyApp;
