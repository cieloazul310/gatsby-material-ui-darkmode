# Gatsby Material-UI dark mode example

[Gatsby] [Material-UI] dark mode example

## How to use

```sh
$ git clone git@github.com:cieloazul310/gatsby-material-ui-darkmode.git
$ cd gatsby-material-ui-darkmode

# develop
$ yarn run develop

# build
$ yarn run build
```

## Custom Hook

```jsx
import useTheme from '@material-ui/core/styles/useTheme';
import { useToggleDarkMode } from './DispatchContext';

function App() {
  const paletteType = useTheme().palette.type;
  const _toggleDarkMode = useToggleDarkMode();
  return (
    <div>
      <button onClick={_toggleDarkMode}>
        {paletteType === 'dark' ? 'on' : 'off'}
      </button>
    </div>
  );
}
```

[Material-UI]: https://material-ui.com "Material-UI"
[Gatsby]: https://www.gatsbyjs.org "Gatsby"
