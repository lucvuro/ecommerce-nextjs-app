import Container from '@mui/material/Container';
import Head from 'next/head';
import React from 'react';

import { CustomNavbar } from '@/components/common';
import type { TMainLayout } from '@/layouts/MainLayout/typings';

const MainLayout: React.FC<TMainLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shopping</title>
      </Head>
      <CustomNavbar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};
export default MainLayout;
