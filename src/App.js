import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; // Importa tu página de inicio
import 'tailwindcss/tailwind.css';

// Importa otras páginas si las tienes

function App() {
  const isLoggedIn = false; // Aquí deberías tener lógica para verificar si el usuario está autenticado

  return (
    <Router>
    <div>
      {/* Renderiza el Navbar solo si el usuario está autenticado */}
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage />} /> 
        <Route path="/home" element={<HomePage />} />
        {/* Agrega más rutas aquí si es necesario */}
      </Routes>
    </div>
  </Router>
);
}


export default App;

