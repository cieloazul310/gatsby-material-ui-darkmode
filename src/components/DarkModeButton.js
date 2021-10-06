import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness5 from '@mui/icons-material/Brightness5';
import ColorModeContext from '../ColorModeContext';

function DarkModeButton(props) {
  const { mode } = useTheme().palette;
  const colorMode = React.useContext(ColorModeContext);
  
  return (
    <IconButton onClick={colorMode.toggleColorMode} {...props}>
      {mode === 'dark' ? <Brightness5 /> : <Brightness4 />}
    </IconButton>
  );
}

export default DarkModeButton;
