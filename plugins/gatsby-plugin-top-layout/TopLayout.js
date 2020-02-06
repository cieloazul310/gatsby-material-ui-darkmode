import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import initialTheme from '../../src/theme';
import { themeReducer, initialState } from '../../src/themeReducer';
import { DispatchContext } from '../../src/DispatchContext';

export default function TopLayout(props) {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const { darkMode } = state;
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        primary: initialTheme.palette.primary,
        secondary: initialTheme.palette.secondary,
        type: darkMode ? 'dark' : 'light'
      }
    });
  }, [darkMode]);

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
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DispatchContext.Provider value={dispatch}>
          {props.children}
        </DispatchContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
