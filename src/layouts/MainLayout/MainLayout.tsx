import Container from '@mui/material/Container';
import React from 'react';

import { CustomNavbar } from '@/components/common';
import type { TMainLayout } from '@/layouts/MainLayout/typings';

const MainLayout: React.FC<TMainLayout> = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};
export default MainLayout;
