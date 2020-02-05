import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useTheme from '@material-ui/core/styles/useTheme';
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness5 from '@material-ui/icons/Brightness5';
import { useToggleDarkMode } from '../utils/themeReducer';

function DarkModeButton(props) {
  const paletteType = useTheme().palette.type;
  const _toggleDarkMode = useToggleDarkMode();
  
  return (
    <IconButton onClick={_toggleDarkMode} {...props}>
      {paletteType === 'dark' ? <Brightness5 /> : <Brightness4 />}
    </IconButton>
  );
}

export default DarkModeButton;
