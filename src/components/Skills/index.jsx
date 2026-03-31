import React from 'react';
import { GridSkills } from './GridSkills';

function Skills() {
  return (
    <section
      aria-labelledby="Skills-title"
      className="bg-black py-15 sm:py-26 lg:py-20"
      id="Habilidades"
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-7">
        {' '}
        <header className="space-y-4 text-center">
          <h2 className="text-4xl font-bold flex justify-center gap-2">
            Mis
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-lg font-semibold text-white">Skills Fullstack</p>
        </header>
        <div className="">
          <div className="flex justify-center ">
            <GridSkills />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Skills };
