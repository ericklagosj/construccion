import React from 'react';
import '../nosotros.css';  // Importa los estilos

function SobreNosotros() {
  return (
    <section id="nosotros" className="sobre-nosotros">
      <h2>Sobre Nosotros</h2>
      <div className="contenedor-maestros">
        <div className="maestro">
          <h3>Jose Guillermo Sáez</h3>
          <p>Con más de 20 años de experiencia en la construcción, especializado en proyectos completos desde radieres hasta remodelaciones.</p>
        </div>
        <div className="maestro">
          <h3>Jose Alfredo Lagos Jara</h3>
          <p>Maestro en estructuras metálicas e instalación de ascensores, con 27 años de experiencia en proyectos industriales y domésticos.</p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
