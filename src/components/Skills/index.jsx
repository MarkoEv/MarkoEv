import React from 'react';
import { GridSkills } from './GridSkills';

function Skills() {
  return (
    <section
      aria-labelledby="Skills-title"
      className="bg-black py-15 "
      id="Habilidades"
    >
      <div className="px-4 sm:px-12 lg:px-46 ">
        <div className="grid items-center ">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <header className="space-y-4 text-center">
              <h2 className="text-4xl font-bold flex justify-center gap-2">
                Mis
                <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Habilidades
                </span>
              </h2>
              <p className="text-lg font-semibold text-white">
                Skills Fullstack
              </p>
            </header>
            <GridSkills />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Skills };
