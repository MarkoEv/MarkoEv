import React from 'react';
import { GridSkills } from './GridSkills';

function Skills() {
  return (
    <section aria-labelledby="Skills-title" className="bg-black py-16">
      <div className="text-center">
        <header className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-center justify-center flex gap-2">
            Mis
            <span className="text-4xl font-bold text-green-400">
              Habilidades
            </span>
          </h2>
          <p className=" text-lg font-semibold text-white">Skills Fullstack</p>
        </header>
        <div className="mt-4 w-full">
          <div className="flex justify-center">
            <GridSkills />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Skills };
