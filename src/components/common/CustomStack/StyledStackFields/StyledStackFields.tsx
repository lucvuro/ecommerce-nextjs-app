import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledStackFields = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));
export default StyledStackFields;
