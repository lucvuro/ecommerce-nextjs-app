import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { ListProduct } from '@/components/common';
import useGetProdcuts from '@/hooks/useGetProducts';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));

const Index = () => {
  const { data, isLoading } = useGetProdcuts();
  return (
    <StyledBoxWrapper>
      <Typography variant="h5">All Products</Typography>
      <ListProduct listProduct={data} isLoading={isLoading} />
    </StyledBoxWrapper>
  );
};

export default Index;
