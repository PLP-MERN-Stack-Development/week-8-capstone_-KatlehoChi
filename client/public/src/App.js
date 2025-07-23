import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Africa from './pages/Africa';
import Recipe from './pages/Recipe';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Africa />} />
      <Route path="/recipes/:id" element={<Recipe />} />
    </Routes>
  </Router>
);

export default App;
