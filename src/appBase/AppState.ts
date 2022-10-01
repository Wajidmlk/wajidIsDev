import {
  createContext, Dispatch, SetStateAction, useContext
} from 'react';
type tpTAppState = {
  multipage: boolean,
  sideMenuToggle?: string,
  step?: number,
  theme?: string,
}
export type tpIAppStateContext = {
  multipage: tpTAppState['multipage'],
  sideMenuToggle?: tpTAppState['sideMenuToggle'],
  step?: tpTAppState['step'],
  theme?: tpTAppState['theme'],
  setAppState?: Dispatch<SetStateAction<tpIAppStateContext>>,
}

export const ctxAppState = createContext<tpIAppStateContext | undefined>(undefined);
ctxAppState.displayName = 'App Context';

export const useAppStateContext = (): tpIAppStateContext => {
  const context = useContext(ctxAppState);
  if (context === undefined) {
    throw new Error('useAppStateContext must be within AppStateContext');
  }

  return context;
};
