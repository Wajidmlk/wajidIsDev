import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';
import './index.scss';
import './appBase.scss';
import './components/homePages/homePages.scss';
import './components/navs/navs.scss';
import './components/navs/navsDrawers.scss';
import './components/footers/footers.scss';
import './components/buttons/buttons.scss';
import AppStateProvider from './appUtils/AppStateProvider';

const container = document.getElementById('react-container');
if (container !== null) {
  const root = createRoot(container);
  root.render(

    <AppStateProvider>
      <AppRoutes />
    </AppStateProvider> 
  );
}
