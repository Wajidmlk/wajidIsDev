import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppStateProvider from './appBase/AppStateProvider';
import AppTheme from './appBase/AppThemeFoundation';
const CpRoutes = (): JSX.Element => (
  <AppStateProvider>
    <Router>
      <Routes>
        <Route path='/' element={<AppTheme component={<h1>asdasd</h1>}/>} />
      </Routes>
    </Router>
  </AppStateProvider>
);

export default CpRoutes;
