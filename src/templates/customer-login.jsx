import React from 'react';
import '../styles/styles.css';
import '../styles/stylestemplate.css';
import Footer from '../components/footer';
import BackButton from '../components/backbutton';
import SellerLoginButton from '../components/sellerlogin';
import apresazul from '../images/apresazul.png';
import LoginButton from '../components/loginbutton';

const CustomerLogin = () => {
  return (
    <div className="screen">
        <div className="background-image"></div>
        <div className="container">
            <div className="components">
                <BackButton />
                <SellerLoginButton />
            </div>
            <div className="logo-apres-container">
                <img src={apresazul} alt="Logo Apres" className="logo-apres" />
                <div className="form">
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <div className="form">
                            <input type="email" placeholder="Correo Electrónico" className="formfield" required />
                            
                        </div>
                        <div className="form">
                            <input type="password" placeholder="Contraseña" className="formfield" required />
                        </div>
                        <div className="formbutton">
                            <LoginButton />
                        </div>
                        <div className="text">
                            <p>¿No tienes una cuenta? <a href="/customer-signup">Regístrate ahora</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  );
};

export default CustomerLogin;