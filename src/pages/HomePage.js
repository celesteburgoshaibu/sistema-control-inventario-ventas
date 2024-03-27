import React from 'react';
import Navbar from '../components/Navbar'; // Asegúrate de importar correctamente el Navbar


function HomePage() {

  const isLoggedIn = true;

  return (
    <div className='flex h-screen bg-teal-900'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='ml-20'>     
        <h2>Bienvenido a la página de inicio</h2>
        <p>¡Aquí puedes mostrar cualquier contenido que desees para tu página de inicio!</p>
      </div>
 
    </div>
  );
}

export default HomePage;
