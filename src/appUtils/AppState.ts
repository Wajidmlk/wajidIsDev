import {
  createContext, useContext
} from 'react';
import { tpAppStructure, tpUser } from '../common/commonTypes';

export const ctxAppState = createContext<tpAppStructure | undefined>(undefined);
ctxAppState.displayName = 'App Context';

export const useAppStateContext = (): tpAppStructure&{user?: tpUser} => {
  const context = useContext(ctxAppState);
  if (context === undefined) {
    throw new Error('useAppStateContext must be within AppStateContext');
  }

  return context;
};
