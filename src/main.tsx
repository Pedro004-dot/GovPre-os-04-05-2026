import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary.tsx';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfUse from './pages/TermsOfUse.tsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Elemento #root não encontrado no HTML.');
}

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-uso" element={<TermsOfUse />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
