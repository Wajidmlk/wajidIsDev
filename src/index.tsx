import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';

import "animate.css/animate.min.css";


import './index.scss';
import './appBase.scss';
import './responsiveStyles.scss';
import './common/common.scss';
import './pages/homePages/homePages.scss';
import './components/navs/navs.scss';
import './components/navs/navsDrawers.scss';
import './components/footers/footers.scss';
import './components/buttons/buttons.scss';
import './components/slider/slider.scss';
import './pages/IntroPages/introPages.scss';
import './components/progressBar/progressBar.scss';
import './pages/experiencePages/experiencePages.scss';
import './pages/showcasePages/showcasePages.scss';
import './pages/showcasePages/productContainer/productContainer.scss';
import './components/informationStripe/informationStripe.scss';
import './components/cards/experienceBox/experienceBox.scss';
import './components/galleries/gallery.scss';
import './pages/footerPages/footerPages.scss';
//import './components/cards/sliderCardBox/sliderCardBox.scss';
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
