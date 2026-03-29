// src/components/Hero.jsx
import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { SiPlatzi } from 'react-icons/si';
import { SkillsCarrusel } from '../Carrusels/SkillCarrusel';
import heroBg from '../..//assets/images/photos/hero.png';

function Hero() {
  const redes = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/markoev',
    },
    {
      id: 2,
      label: 'Contactar',
      icon: <BiLogoGmail />,
      href: 'markodevp@gmail.com',
    },
    {
      id: 3,
      label: 'GitHub',
      icon: <FaGithubSquare />,
      href: 'https://github.com/MarkoEv',
    },
    {
      id: 4,
      label: 'Platzi',
      icon: <SiPlatzi />,
      href: 'https://platzi.com/p/MarkoEv',
    },
  ];

  return (
    <section aria-label="Presentación">
      <div className="px-4 sm:px-12 lg:px-36 py-10">
        <div
          className="rounded-2xl p-6 sm:p-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-green-400">Marco Antonio </span>
              <span className="block">Evangelista Armenta</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              Ingeniero en Sistemas y Desarrollador Web
            </p>
          </div>

          <nav
            aria-label="Redes sociales"
            className="mt-6 grid lg:w-80 w-20 gap-3"
          >
            {redes.map(({ id, label, icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border rounded-xl px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                {icon}
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="px-4 sm:px-12 lg:px-36 opacity-60">
        <SkillsCarrusel />
      </div>
    </section>
  );
}

export { Hero };
