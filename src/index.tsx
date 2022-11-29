import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';
import './index.scss';
import './appBase.scss';
import './common/common.scss';
import './components/homePages/homePages.scss';
import './components/navs/navs.scss';
import './components/navs/navsDrawers.scss';
import './components/footers/footers.scss';
import './components/buttons/buttons.scss';
import './components/IntroPages/introPages.scss';
import './components/progressBar/progressBar.scss';
import './components/experiencePages/experiencePages.scss';
import './components/showcasePages/showcasePages.scss';
import './components/showcasePages/productContainer/productContainer.scss';

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
