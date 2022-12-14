import { useMemo, useState } from 'react';
import { tpAppStructure, tpUser } from '../common/commonTypes';
import { GetAppStructure } from '../common/staticApp/StaticAppStructure';
import { ctxAppState } from './AppState';
import { serviceLocalStorageUser } from './AppUtilities';

type tpProps = {
  children: JSX.Element | JSX.Element[],
}

const AppStateProvider = ({children}: tpProps):JSX.Element => {
  const isMobileMode = window.innerWidth < 550;
  const [appState, setAppState] = useState<tpAppStructure>(GetAppStructure());
  const [user, setUser] = useState<tpUser|undefined>(serviceLocalStorageUser("get"));

  const value = useMemo(() => ({
    ...appState, setAppState, isMobileMode, user, setUser,
  }), [appState, isMobileMode, user]);
  
  return (
    <ctxAppState.Provider value={value}>{children}</ctxAppState.Provider>
  );
};

export default AppStateProvider;
