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
      <div className="container">
        <BackButton />
        <div className="logo-apres-container-seller">
          <img src={apresazul} alt="Logo Apres" className="logo-apres" />
          <div className="form">
            <h2>Iniciar Sesión como Vendedor</h2>
            <form>
              <div className="form">
                <label htmlFor="user" className="label">Usuario</label>
                <input type="user" placeholder="Usuario..." className="formfield" required />
              </div>
              <div className="form">
                <label htmlFor="password" className="label">Contraseña</label>
                <input type="password" placeholder="Contraseña..." className="formfield" required />
              </div>
              <div className="formbutton">
                <LoginButton />
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