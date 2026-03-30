import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebook } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { SiPlatzi } from 'react-icons/si';
import { CarouselLenguages } from '../Carrusels/CarouselLenguages';
import { lenguajes } from '../../data/lenguages';

function Hero() {
  const redes = [
    {
      id: 1,
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/markoev',
    },
    {
      id: 2,
      name: 'GitHub',
      icon: <FaGithubSquare />,
      href: 'https://github.com/MarkoEv',
    },
    {
      id: 3,
      name: 'Platzi',
      icon: <SiPlatzi />,
      href: 'https://platzi.com/p/MarkoEv',
    },
    {
      id: 4,
      name: 'Facebook',
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/markoevang/',
    },
  ];

  return (
    <section
      aria-label="Presentación"
      className="flex justify-center items-center h-screen"
    >
      <div className="px-4 sm:px-12 lg:px-36 py-6 ">
        <div className="relative p-6 sm:p-10">
          <div
            className="
            absolute inset-0 bg-cover bg-center rounded-xl
            lg:bg-[url('../../assets/images/photos/herolg.jpg')]
            md:bg-[url('../../assets/images/photos/heromd.jpg')]
            sm:bg-[url('../../assets/images/photos/herosm.jpg')]
            bg-[url('../../assets/images/photos/heromobile.jpg')]
            "
          ></div>

          <div className="relative z-10 max-w-lg text-white ">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ">
              <span className="text-green-400">Marco Antonio </span>
              <span className="block">Evangelista Armenta</span>
            </h1>
            <p className="mt-4 text-lg font-semibold sm:text-base text-center sm:text-start">
              Ingeniero en Sistemas y Desarrollador Web
            </p>
            <p className="text-sm sm:text-base text-gray-300 text-center sm:text-start">
              Especializado en desarrollo web, con amplio conocimiento en
              tecnologías modernas. Interesado en la docencia para ayudar a
              quienes buscan cambiar el mundo a través de la tecnología.
            </p>
            <p
              className="mt-2 text-sm text-center sm:text-start"
              aria-label="Contacto de marco"
            >
              <a
                href="mailto::armentamarcoantonioev@gmail.com"
                className="hover:underline text-green-400 font-semibold "
                aria-label="Contactar a marco"
              >
                armentamarcoantonioev@gmail.com
              </a>
            </p>
            <nav
              aria-label="Redes sociales"
              className="mt-10 flex gap-4 overflow-visible justify-center sm:justify-start"
            >
              {redes.map(({ id, name, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className="relative group  text-3xl hover:scale-125 transition-transform duration-300"
                >
                  {icon}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Perfil de {name}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/cv-marco-evangelista.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar CV de Marco"
                className="flex items-center justify-center gap-2 bg-green-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-green-400 transition"
              >
                <HiOutlineDownload className="text-lg" />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:px-12 opacity-90 grid gap-5">
          <CarouselLenguages
            items={lenguajes}
            direction={'scrollLenguagesRigth'}
          />
          <CarouselLenguages
            items={lenguajes}
            direction={'scrollLenguagesLeft'}
          />
        </div>
      </div>
    </section>
  );
}

export { Hero };
