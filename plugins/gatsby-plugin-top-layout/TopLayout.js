import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import initialTheme from '../../src/theme';
import ColorModeContext from '../../src/ColorModeContext';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...initialTheme.palette.primary,
      ...(mode === 'dark' && {
        main: initialTheme.palette.primary[300],
      }),
    },
    secondary: {
      ...initialTheme.palette.secondary,
      ...(mode === 'dark' && {
        main: initialTheme.palette.secondary[300],
      }),
    },
  },
});

export default function TopLayout(props) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
