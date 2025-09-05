import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/stylestemplate.css';
import Footer from '../components/footer';
import BackButton from '../components/backbutton';
import apresazul from '../images/apresazul.png';
import axios from 'axios';
import LoginButton from '../components/loginbutton';

const SellerLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!user || !password) {
    if (!user) {
      setMensaje('Por favor ingresá tu usuario');
      return;
    } else {
      setMensaje('Por favor ingresá tu contraseña');
      return;
    }
  }

  try {
    const response = await axios.post('http://localhost:8000/api/seller-login/', {
      user,
      password
    });

    const { redirect, first_name, seller_id } = response.data;

    if (redirect) {
      localStorage.setItem('seller_name', first_name);
      localStorage.setItem('seller_id', seller_id);
      navigate('/seller-index');
    } else {
      setMensaje('Login fallido');
    }
  } catch (error) {
    if (error.response?.status === 401) {
      setMensaje('Contraseña incorrecta');
    } else if (error.response?.status === 404) {
      setMensaje('Usuario no encontrado');
    } else {
      setMensaje('Error de conexión con el servidor');
    }
  }
};

  return (
    <div>
      <div className="background-image-seller"></div>
      <div className="container">
        <BackButton />
        <div className="logo-apres-container-seller">
          <img src={apresazul} alt="Logo Apres" className="logo-apres" />
          <div className="form">
            <h2>Iniciar Sesión como Vendedor</h2>
            <form onSubmit={handleLogin}>
              <div className="form">
                <label htmlFor="user" className="label">Usuario</label>
                <input
                  type="text"
                  placeholder="Usuario..."
                  className="formfield"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>
              <div className="form">
                <label htmlFor="password" className="label">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña..."
                  className="formfield"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="error">
                {mensaje && <div className="error-message">{mensaje}</div>}
              </div>
              <div className="formbutton">
                <LoginButton onClick={handleLogin} />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SellerLogin;