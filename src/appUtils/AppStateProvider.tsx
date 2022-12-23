import { useMemo, useState } from 'react';
import { tpAppStructure } from '../common/commonTypes';
import { GetAppStructure } from '../common/staticApp/StaticAppStructure';
import { ctxAppState } from './AppState';

type tpProps = {
  children: JSX.Element | JSX.Element[],
}

const AppStateProvider = ({children}: tpProps):JSX.Element => {
  const isMobileMode = window.innerWidth < 550;
  const [appState, setAppState] = useState<tpAppStructure>(GetAppStructure());

  const value = useMemo(() => ({ ...appState, setAppState, isMobileMode }), [appState]);
  
  return (
    <ctxAppState.Provider value={value}>{children}</ctxAppState.Provider>
  );
};

export default AppStateProvider;
