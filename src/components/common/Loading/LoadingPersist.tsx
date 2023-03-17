import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  display: 'grid',
  placeItems: 'center',
}));

const LoadingPersist = () => {
  return (
    <StyledBoxWrapper>
      <CircularProgress size={70} />
    </StyledBoxWrapper>
  );
};
export default LoadingPersist;
