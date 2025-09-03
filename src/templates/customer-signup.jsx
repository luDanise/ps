import React from 'react';
import '../styles/styles.css';
import Footer from '../components/footer';
import BackButton from '../components/backbutton';
import apresazul from '../images/apresazul.png';
import SignUpButton from '../components/signupbutton';

const CustomerSignup = () => {
  return (
    <div className="screen">
        <div className="background-image"></div>
        <BackButton />
        <div className="logo-apres-container">
          <img src={apresazul} alt="Logo Apres" className="logo-apres" />
          <div className="form">
            <h2>Crear nuevo usuario</h2>
            <form>
              <div className="formsignup">
                <div className="formsu">
                  <label htmlFor="name" className="label">Nombre</label>
                  <input type="text" placeholder="Nombre..." className="formfield" required />
                </div>
                <div className="formsu">
                  <label htmlFor="lastname" className="label">Apellido</label>
                  <input type="text" placeholder="Apellido..." className="formfield" required />
                </div>
                <div className="formsu">
                  <label htmlFor="birthday" className="label">Fecha de Nacimiento</label>
                  <input type="date" placeholder="Fecha de Nacimiento" className="formfield" required />
                </div>
                <div className="formsu">
                  <label htmlFor="province" className="label">Provincia</label>
                  <input type="text" placeholder="Provincia..." className="formfield" required />
                </div>
                <div className="formsu">
                  <label htmlFor="email" className="label">Correo Electrónico</label>
                  <input type="email" placeholder="Correo Electrónico..." className="formfield" required />
                </div>
                <div className="formsu">
                  <label htmlFor="password" className="label">Contraseña</label>
                  <input type="password" placeholder="Contraseña..." className="formfield" required />
                </div>
              </div>
              <div className="formsubutton">
                <SignUpButton />
              </div>    
            </form>
          </div>
        </div>
        <div className="container"><Footer /></div>
    </div>
  );
};

export default CustomerSignup;