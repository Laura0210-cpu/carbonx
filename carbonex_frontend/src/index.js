import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
import App from './App';
import './index.css'; // ← ensures Tailwind styles are applied

// Import Google Font
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

document.body.style.fontFamily = "'Darker Grotesque', sans-serif";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);