import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Arquivo de estilo global
import App from './App';  // O componente principal da aplicação

// Criação da raiz da aplicação React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente App dentro de React.StrictMode (ajuda a identificar problemas na aplicação)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

