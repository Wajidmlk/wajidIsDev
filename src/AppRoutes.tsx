import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const CpRoutes = (): JSX.Element => (
    <Router>
      <Routes>
        <Route path='/' element={<h1>asdasd</h1>} />
      </Routes>
    </Router>
);

export default CpRoutes;
