import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';
import './index.scss';
import './appBase.scss';
import './components/navs/navs.scss';

const container = document.getElementById('react-container');
if (container !== null) {
  const root = createRoot(container);
  root.render(<AppRoutes />);
}
