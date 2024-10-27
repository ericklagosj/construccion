import React from 'react';
import '../contacto.css';  // Importa los estilos
import 'font-awesome/css/font-awesome.min.css'; // Asegúrate de tener Font Awesome importado

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-info">
        <p>
          <strong>Jose Guillermo Sáez</strong><br />
          <i className="fa fa-phone"></i> Teléfono: <a href="tel:+56977398254">+56977398254</a>
        </p>
        <p>
          <strong>Jose Alfredo Lagos Jara</strong><br />
          <i className="fa fa-phone"></i> Teléfono: <a href="tel:+56944983143">+56944983143</a>
        </p>
      </div>
    </section>
  );
};

export default Contacto;
