import { useMemo, useState } from 'react';
import { tpAppStructure } from '../common/commonTypes';
import { GetAppStructure } from '../common/staticApp/StaticAppStructure';
import { ctxAppState } from './AppState';

type tpProps = {
  children: JSX.Element | JSX.Element[],
}

const AppStateProvider = ({children}: tpProps):JSX.Element => {
  const [appState, setAppState] = useState<tpAppStructure>(GetAppStructure());

  const value = useMemo(() => ({ ...appState, setAppState }), [appState]);
  
  return (
    <ctxAppState.Provider value={value}>{children}</ctxAppState.Provider>
  );
};

export default AppStateProvider;
