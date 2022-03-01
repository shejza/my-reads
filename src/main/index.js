import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';
import Index from 'main/scenes/application';

export default function index() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path='*'
            element={<Index />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
