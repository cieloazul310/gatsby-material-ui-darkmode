import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '../components/Link';
import DarkModeButton from '../components/DarkModeButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Layout({ children }) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <DarkModeButton />
        <main>
          {children}
        </main>
        <footer>
          <Copyright />
        </footer>
      </Box>
    </Container>
  );
}

export default Layout;
