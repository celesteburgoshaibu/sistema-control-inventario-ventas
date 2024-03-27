import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="bg-gray-800 h-full w-56 flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16">
          <img className="h-8 w-auto" src="https://via.placeholder.com/80" alt="Logo" />
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="flex flex-col space-y-1 px-4 py-2">
            <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>
            <Link to="/productos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Productos
            </Link>
            {/* Agrega más enlaces según sea necesario */}
          </div>
        </div>
        <div className="flex justify-center pb-6">
          {isLoggedIn ? (
            // Si el usuario está autenticado, no mostrar el enlace de inicio de sesión
            <>
              {/* Agrega más opciones de usuario autenticado según sea necesario */}
            </>
          ) : (
            <div>
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Iniciar sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


