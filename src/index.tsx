import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';
import './index.scss';

const container = document.getElementById('react-container');
if (container !== null) {
  const root = createRoot(container);
  root.render(<AppRoutes />);
}
