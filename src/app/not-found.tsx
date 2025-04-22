'use client';
// ** Next Import
import Link from 'next/link';

// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// ** Layout Import
// ** Styled Components
const Wrap = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '700px',
  marginTop: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));

const NotFoundPage = () => {
  return (
    <Wrap className="content-center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
        Page Not Found ⚠️
      </Typography>
      <Typography variant="body2" sx={{ color: '#fff' }}>
        We couldn&prime;t find the page you are looking for.
      </Typography>
      <Link passHref href="/">
        <Button variant="contained" sx={{ px: 5.5, mt: 5, borderRadius: 30 }}>
          Back to Home
        </Button>
      </Link>
    </Wrap>
  );
};

export default NotFoundPage;
