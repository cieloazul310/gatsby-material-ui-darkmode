import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
