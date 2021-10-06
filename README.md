# Gatsby MUI dark mode example

[Gatsby] [MUI] dark mode example

## How to use

```sh
$ git clone git@github.com:cieloazul310/gatsby-material-ui-darkmode.git
$ cd gatsby-material-ui-darkmode

# develop
$ yarn run develop

# build
$ yarn run build
```

## Toggle color mode

```jsx
import * as React from 'react';
import Button from '@mui/material/Button';
import ColorModeContext from './ColorModeContext';

function ToggleButton() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Button onClick={colorMode.toggleColorMode}>
      Toggle Color Mode
    </Button>
  );
}
```

[MUI]: https://mui.com "MUI"
[Gatsby]: https://www.gatsbyjs.org "Gatsby"
