import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente'); // o 'vendedor'
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor completá todos los campos');
      return;
    }

    // Simulación de lógica de autenticación
    if (rol === 'cliente') {
      navigate('/customer-index');
    } else if (rol === 'vendedor') {
      navigate('/seller-index');
    }
  };

  return (
    <div className="login-form">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Selector de rol (opcional) */}
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="cliente">Cliente</option>
        <option value="vendedor">Vendedor</option>
      </select>

      <LoginButton onClick={handleLogin} />
    </div>
  );
}

export default LoginForm;