import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import { ResumeProvider } from './contexts/ResumeContext';

function App() {
  return (
    <ResumeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="builder" element={<BuilderPage />} />
        </Route>
      </Routes>
    </ResumeProvider>
  );
}

export default App;