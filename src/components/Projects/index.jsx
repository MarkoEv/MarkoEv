import React from 'react';
import { CarouselSkills } from '../Carrusels/CarouselSkills';
import { CarouselProjects } from '../Carrusels/CarouselProjects';
import { techs } from '../../data/techs';
import { proyectos } from '../../data/projects';

function Projects() {
  return (
    <section aria-labelledby="projects-title" className="bg-[#1c1c1c] py-16">
      <div className="px-4 sm:px-12 lg:px-36">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Mis Proyectos{' '}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Durante mi trayectoria
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Aplicaciones web enfocadas en rendimiento, experiencia de usuario y
            soluciones reales.
          </p>
        </header>
        <CarouselProjects proyectos={proyectos} />
        <div className="mt-14 opacity-90">
          <CarouselSkills items={techs} />
        </div>
      </div>
    </section>
  );
}

export { Projects };
