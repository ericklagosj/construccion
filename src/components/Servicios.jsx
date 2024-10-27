import React, { useState } from 'react';
import '../servicios.css';  // Importa los estilos

const serviciosData = [
  {
    titulo: 'Construcción de casas desde cero',
    descripcion: 'Nos dedicamos a hacer casas desde cero, desde los cimientos, radier, estructura, hasta los últimos detalles.',
    detalles: 'Contamos con más de 20 años de experiencia en proyectos residenciales de alta calidad.',
    icono: 'fas fa-home'
  },
  {
    titulo: 'Remodelación de casas',
    descripcion: 'Realizamos remodelaciones completas, tanto estructurales como de diseño de interiores.',
    detalles: 'Ofrecemos asesoramiento en diseño y materiales, trabajando con los mejores proveedores.',
    icono: 'fas fa-paint-roller'
  },
  {
    titulo: 'Pintura y decoración',
    descripcion: 'Ofrecemos servicios de pintura interior y exterior, con opciones decorativas.',
    detalles: 'Utilizamos pinturas ecológicas y técnicas avanzadas para garantizar un acabado duradero.',
    icono: 'fas fa-brush'
  },
  {
    titulo: 'Pisos flotantes y cerámica',
    descripcion: 'Instalación de pisos flotantes, cerámica y otros revestimientos para interiores y exteriores.',
    detalles: 'Trabajamos con una amplia variedad de materiales, garantizando la mejor relación calidad-precio.',
    icono: 'fas fa-th-large'
  },
  {
    titulo: 'Portones eléctricos y rejas',
    descripcion: 'Fabricación e instalación de portones eléctricos y rejas para mayor seguridad.',
    detalles: 'Diseños personalizados que se ajustan a las necesidades de cada cliente, con tecnología de última generación.',
    icono: 'fas fa-door-closed'
  },
  {
    titulo: 'Instalación de ascensores',
    descripcion: 'Instalamos ascensores residenciales y comerciales según las normativas vigentes.',
    detalles: 'Contamos con certificación para la instalación de equipos seguros y eficientes.',
    icono: 'fas fa-elevator'
  }
];

const Servicios = () => {
  const [mostrarDetalles, setMostrarDetalles] = useState(
    serviciosData.map(() => false) // Controla qué detalles mostrar
  );

  const toggleDetalles = (index) => {
    const nuevosDetalles = [...mostrarDetalles];
    nuevosDetalles[index] = !nuevosDetalles[index];
    setMostrarDetalles(nuevosDetalles);
  };

  return (
    <section id="servicios" className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="servicio">
            <i className={`${servicio.icono} icono-servicio`}></i> {/* Mantén el ícono */}
            <h3>{servicio.titulo}</h3>
            <p className="descripcion">{servicio.descripcion}</p>
            {mostrarDetalles[index] && (
              <p className="detalles">{servicio.detalles}</p>
            )}
            <button 
              onClick={() => toggleDetalles(index)} 
              className="btn btn-link"
              style={{ padding: 0, color: '#007bff' }} // Sin fondo y con color de texto
            >
              {mostrarDetalles[index] ? (
                <>
                  Ver menos <i className="fas fa-chevron-up"></i>
                </>
              ) : (
                <>
                  Ver más <i className="fas fa-chevron-down"></i>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
