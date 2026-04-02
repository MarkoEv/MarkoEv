import React from 'react';
import comillas from '../../assets/images/icons/comillas.svg';
import { CarouselBlogs } from '../Carrusels/CarouselBlogs';

function Blogs() {
  return (
    <section
      aria-labelledby="blog-title"
      className="bg-[#1c1c1c] py-16"
      id="Blog"
    >
      <div className="px-4 sm:px-12 lg:px-46">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl flex flex-col gap-5 text-center md:text-left">
            <img
              src={comillas}
              alt="Icono decorativo de comillas"
              className="w-6 sm:w-8 opacity-70 mx-auto md:mx-0"
            />

            <div>
              <h2 id="blog-title" className="text-3xl sm:text-4xl font-bold">
                <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Conoce más sobre mi
                </span>
              </h2>

              <p className="mt-2 text-lg font-semibold text-white">
                Experiencias, proyectos y evolución como desarrollador
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Soy una persona comprometida con mi crecimiento constante, siempre
              buscando mejorar día con día tanto a nivel personal como
              profesional. Mantengo mi vida personal de forma reservada en redes
              sociales, ya que prefiero enfocar mi presencia en lo profesional.
              Aspiro a integrarme en un entorno laboral donde pueda demostrar
              mis habilidades, aportar valor y, al mismo tiempo, seguir
              aprendiendo de otros profesionales.
            </p>

            <time
              dateTime="2026-03-30"
              className="text-xs sm:text-sm text-gray-400 font-light"
            >
              Última actualización: 30 de marzo de 2026
            </time>
          </div>

          <div className="w-full  rounded-2xl">
            <CarouselBlogs />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Blogs };
