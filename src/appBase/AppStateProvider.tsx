import {useEffect, useMemo, useState} from 'react';
import { ctxAppState, tpIAppStateContext } from './AppState';

type tpProps = {
  children: JSX.Element | JSX.Element[],
}

type tpAppStructure = {
  pages: {

  }[],
  nav: string,
}

const AppStructure = (multipage: boolean) => {
};
const utApplyTheme = (themeName: string): void => {
  const link = document.getElementById("appTheme") as HTMLAnchorElement;
  if (link) {
    link.id = "appTheme";
    link.rel = "stylesheet";
    link.href = `/assets/theme/css/themes/${themeName}`;
  }
};

const AppStateProvider = (props: tpProps):JSX.Element => {
  const [appState, setAppState] = useState<tpIAppStateContext>({
    multipage: true,
    theme: 'light',
    sideMenuToggle: 'open',
  });

  const value = useMemo(() => ({ ...appState, setAppState }), [appState]);
  const {
    children
  } = props;

  useEffect(() => {
    utApplyTheme("1-light-theme.css");
  }, []);

  return (
    <ctxAppState.Provider value={value}>{children}</ctxAppState.Provider>
  );
};

export default AppStateProvider;
