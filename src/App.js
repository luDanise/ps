import logo from './images/logo.svg';
import './App.css';
import Footer from './components/footer'
import BackButton from './components/backbutton';
import LoginButton from './components/loginbutton';
import SignupButton from './components/signupbutton';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* PRUEBA DE COMPONENTES: */}
        <Footer /> {/* FUNCIONA */}
        {/* <BackButton /> FUNCIONA */}
        {/* <div className="btn-container">
          <LoginButton /> 
          <SignupButton />
        </div> FUNCIONA */}
        <Navbar /> {/* FUNCIONA */}
        
        <p>
          Esta es la página principal
        </p>
        <a
        >
          Falta todavía para mostrar el index, pero queda de ejemplo para saber donde poner las cosas y el css que puede servir
        </a>
      </header>
    </div>
  );
}

export default App;
