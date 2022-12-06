import * as React from 'react';
import { createRoot } from 'react-dom/client';

import AppRoutes from './AppRoutes';
import AppStateProvider from './appUtils/AppStateProvider';

import './index.scss';
import './appBase.scss';
import './common/common.scss';

import './components/navs/navs.scss';
import './components/slider/slider.scss';
import './components/buttons/buttons.scss';
import './components/footers/footers.scss';
import './components/navs/navsDrawers.scss';
import './components/progressBar/progressBar.scss';
import './components/informationStripe/informationStripe.scss';

import './pages/homePages/homePages.scss';
import './pages/IntroPages/introPages.scss';
import './pages/showcasePages/showcasePages.scss';
import './pages/experiencePages/experiencePages.scss';
import './pages/showcasePages/productContainer/productContainer.scss';


const container = document.getElementById('react-container');
if (container !== null) {
  const root = createRoot(container);
  root.render( <AppStateProvider><AppRoutes /></AppStateProvider>  );
}
