import { register } from "swiper/element/bundle";
import { useEffect } from "react";

//Imports.
import Tournament1 from "../assets/Tournament1.webp";
import Tournament2 from "../assets/Tournament2.webp";
import Tournament3 from "../assets/Tournament3.webp";
import Tournament4 from "../assets/Tournament4.webp";
import Tournament5 from "../assets/Tournament5.webp";

import "./Carrousel.css";

const Carrousel = () => {
  useEffect(() => {
    register();
  }, []);
  return (
    <section id='galeria' className='flex flex-col items-center justify-center'>
      <h2 className='text-3xl md:text-5xl text-center font-bold mb-4 md:mb-12'>
        Algunos recuerdos de Galicia Gamers
      </h2>
      <swiper-container pagination-clickable='true' navigation='true'>
        <swiper-slide lazy='true'>
          <img
            src={Tournament1.src}
            alt='Equipo de esports en la estación de juego'
            loading='lazy'
          />
        </swiper-slide>
        <swiper-slide lazy='true'>
          <img
            src={Tournament2.src}
            alt='Estaciones de juego que muestra los componentes y perifericos del setup'
            loading='lazy'
          />
        </swiper-slide>
        <swiper-slide lazy='true'>
          <img
            src={Tournament3.src}
            alt='Participantes divirtiéndose en el torneo de esports'
            loading='lazy'
          />
        </swiper-slide>
        <swiper-slide lazy='true'>
          <img
            src={Tournament4.src}
            alt='Equipo de esports celebrando una victoria'
            loading='lazy'
          />
        </swiper-slide>
        <swiper-slide lazy='true'>
          <img
            src={Tournament5.src}
            alt='Una participante del torneo disfrutando la estación de juego'
            loading='lazy'
          />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default Carrousel;
