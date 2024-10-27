import React from 'react';
import Header from './components/Header';
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SobreNosotros />
      <Servicios />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
