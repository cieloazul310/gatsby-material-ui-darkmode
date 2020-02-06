import React from 'react';

/** in TypeScript
 *  import { Action } from '../themeReducer';
 *  
 *  const DispatchContext = 
 *  React.createContext<React.Dispatch<Action>>()
 */

export const DispatchContext = React.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

export function useToggleDarkMode() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(() => dispatch({ type: 'TOGGLE_DARKMODE' }), [
    dispatch
  ]);
}
