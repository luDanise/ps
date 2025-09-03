import React from 'react';
import '../styles/stylestemplate.css';
import Footer from '../components/footer';
import Navbar from '../components/navBar';

const SellerIndex = () => {
  return (
    <div>
      <Navbar />
      <div className="containersi">¡Hola, "nombre"! {/* {seller.first_name} */}</div>
      <div className="customerinfo">
        <div className="font">Clientes Asignados sin responder</div>
        <div className="customerinfoshow">
          <div>Cliente 1</div>
          <div>
          </div>
        </div>
      </div>
      <div className="container"><Footer /></div>
    </div>
  );
};

export default SellerIndex;