import { Modal, Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import '../galeria.css';  // Importa los estilos

// Importa las imágenes locales
import imagen1 from '../images/img1.jpeg';
import imagen2 from '../images/img2.jpeg';
import imagen3 from '../images/img3.jpeg';
import imagen4 from '../images/img4.jpeg';
import imagen5 from '../images/img5.jpeg';
import imagen6 from '../images/img6.jpeg';
import imagen7 from '../images/img7.jpeg';
import imagen8 from '../images/img8.jpeg';
import imagen9 from '../images/img9.jpeg';
import imagen10 from '../images/img10.jpeg';
import imagen11 from '../images/img11.jpeg';
import imagen12 from '../images/img12.jpeg';
import imagen13 from '../images/img13.jpeg';
import imagen14 from '../images/img14.jpeg';
import imagen15 from '../images/img15.jpeg';
import imagen16 from '../images/img16.jpeg';
import imagen17 from '../images/img17.jpeg';
import imagen18 from '../images/img18.jpeg';
import imagen19 from '../images/img19.jpeg';
import imagen20 from '../images/img20.jpeg';

const Galeria = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice de la imagen seleccionada
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const imagenes = [
    { src: imagen1, alt: 'Trabajo 1', info: 'Descripción del Trabajo 1' },
    { src: imagen2, alt: 'Trabajo 2', info: 'Descripción del Trabajo 2' },
    { src: imagen3, alt: 'Trabajo 3', info: 'Descripción del Trabajo 3' },
    { src: imagen4, alt: 'Trabajo 4', info: 'Descripción del Trabajo 4' },
    { src: imagen5, alt: 'Trabajo 5', info: 'Descripción del Trabajo 5' },
    { src: imagen6, alt: 'Trabajo 6', info: 'Descripción del Trabajo 6' },
    { src: imagen7, alt: 'Trabajo 7', info: 'Descripción del Trabajo 7' },
    { src: imagen8, alt: 'Trabajo 8', info: 'Descripción del Trabajo 8' },
    { src: imagen9, alt: 'Trabajo 9', info: 'Descripción del Trabajo 9' },
    { src: imagen10, alt: 'Trabajo 10', info: 'Descripción del Trabajo 10' },
    { src: imagen11, alt: 'Trabajo 11', info: 'Descripción del Trabajo 11' },
    { src: imagen12, alt: 'Trabajo 12', info: 'Descripción del Trabajo 12' },
    { src: imagen13, alt: 'Trabajo 13', info: 'Descripción del Trabajo 13' },
    { src: imagen14, alt: 'Trabajo 14', info: 'Descripción del Trabajo 14' },
    { src: imagen15, alt: 'Trabajo 15', info: 'Descripción del Trabajo 15' },
    { src: imagen16, alt: 'Trabajo 16', info: 'Descripción del Trabajo 16' },
    { src: imagen17, alt: 'Trabajo 17', info: 'Descripción del Trabajo 17' },
    { src: imagen18, alt: 'Trabajo 18', info: 'Descripción del Trabajo 18' },
    { src: imagen19, alt: 'Trabajo 19', info: 'Descripción del Trabajo 19' },
    { src: imagen20, alt: 'Trabajo 20', info: 'Descripción del Trabajo 20' },
  ];

  useEffect(() => {
    // Efecto de entrada deslizante para toda la galería
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <section id="galeria" className={`galeria-container ${isLoaded ? 'slide-in' : ''}`}>
      <header className="galeria-header">
        <h2 className="section-title text-center">Galería</h2>
      </header>


      {/* Galería de imágenes horizontal */}
      <div className="galeria-horizontal">
        {imagenes.map((imagen, index) => (
          <div key={index} className="galeria-item" onClick={() => handleShow(index)}>
            <img src={imagen.src} alt={imagen.alt} className="img-thumbnail" />
          </div>
        ))}
      </div>

      {/* Modal con navegación de imágenes */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{imagenes[selectedIndex]?.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            activeIndex={selectedIndex}
            onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
            indicators={false}
            prevLabel="Anterior"
            nextLabel="Siguiente"
          >
            {imagenes.map((imagen, index) => (
              <Carousel.Item key={index}>
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="d-block w-100"
                  style={{ maxHeight: '90vh', objectFit: 'contain' }} // Ajusta aquí la altura del modal
                />
                <Carousel.Caption>
                  <p>{imagen.info}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Galeria;
