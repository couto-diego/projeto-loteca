import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot de 'react-dom/client'
import App from './App';

// Encontre o elemento root no DOM
const container = document.getElementById('root') as HTMLElement;

// Crie a raiz (root) usando createRoot
const root = createRoot(container);

// Renderize o aplicativo dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);