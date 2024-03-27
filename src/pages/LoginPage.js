import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import InicioSesion from "../assets/InicioSesion.svg";
import Usuario from "../assets/Usuario.svg";
import Contraseña from "../assets/Contraseña.svg";
import Visibility from "../assets/Visibility.svg"
import VisibilityOff from "../assets/VisibilityOff.svg"
import "../styles.css";
import { useNavigate } from "react-router-dom"; // Importa useHistory de react-router-dom


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Estado para el checkbox
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //verifica las credenciales del usuario (simulado)
    if(username === "usuario" && password === "contraseña"){
      navigate("/home");
    }else{
      alert("Credenciales incorrectas. Inténtelo nuevamente.")
    }

    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe); // Verificar si el checkbox está marcado
    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-700 to-green-600">
      <img className="mb-10" src={Logo} alt="Logo" width="300" />
      <div className="text-center w-full mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-300 mb-2 shadow-text ">
          Control de Inventario y Ventas
        </h1>
      </div>
      <div className="bg-cyan-500 p-8 rounded-xl shadow-2xl">
        <div className="flex items-center justify-center pb-3">
          <img
            className="opacity-30 mr-2"
            src={InicioSesion}
            alt="InicioSesion"
            width="80"
          />
          <h2 className="text-2xl text-white ">Inicio Sesión</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mx-auto w-full max-w-xs">
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                  <img
                    src={Usuario}
                    alt="IconoUsuario"
                    className="h-7 w-7 opacity-40"
                  />
                </span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className=" pl-12 rounded-md px-4 py-2 w-full opacity-40 bg-black text-white"
                  placeholder="Usuario"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                  <img
                    src={Contraseña}
                    alt="Contraseña"
                    className="h-7 w-7 opacity-40"
                  />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'} // Cambia el tipo de entrada según el estado de visibilidad
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 rounded-md px-4 py-2 w-full opacity-40 bg-black text-white"
                  placeholder="Contraseña"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-100 focus:outline-none"
                  onClick={handleTogglePasswordVisibility}
                >
                  <img
                    src={showPassword ? Visibility : VisibilityOff}
                    alt={showPassword ? 'Oculta' : 'Mostrar'}
                    className="h-5 w-5 opacity-40"
                  />
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="text-white text-xs ml-1" htmlFor="rememberMe">
                  Recuérdame
                </label>
                <div className="ml-auto">
                  <a href="aquivaellink" className="text-white text-xs">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 w-full"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
