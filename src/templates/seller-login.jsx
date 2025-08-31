import React from 'react';
import '../styles/styles.css';
import '../styles/stylestemplate.css';
import Footer from '../components/footer';
import BackButton from '../components/backbutton';
import apresazul from '../images/apresazul.png';
import LoginButton from '../components/loginbutton';

const SellerLogin = () => {
  return (
    <div>
      <div className="background-image-seller"></div>
      <BackButton />
      <div className="logo-apres-container-seller">
        <img src={apresazul} alt="Logo Apres" className="logo-apres" />
        <div className="form">
          <h2>Iniciar Sesión como Vendedor</h2>
          <form>
            <div className="form">
              <input type="user" placeholder="Usuario" className="formfield" required />
            </div>
            <div className="form">
              <input type="password" placeholder="Contraseña" className="formfield" required />
            </div>
            <div className="formbutton">
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLogin;