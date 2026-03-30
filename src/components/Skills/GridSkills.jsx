import React from 'react';
import { skills } from '../../data/skills';

function GridSkills() {
  return (
    <div
      className="
      grid 
      grid-cols-2 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      gap-4 sm:gap-5
      w-full
      px-4 sm:px-12 lg:px-36      
    "
    >
      {skills.map((i) => (
        <article
          key={i.id}
          className="
            flex items-center gap-3 
            rounded-2xl 
            p-4 
            bg-white/5 
            border border-white/10
            jus
          "
        >
          {/* ICONO */}
          <div
            className="
            flex h-10 w-10 sm:h-12 sm:w-12 
            items-center justify-center 
            rounded-xl 
            bg-white/10
          "
          >
            <img
              src={i.icono}
              alt={i.nombre}
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
            />
          </div>

          {/* TEXTO */}
          <div className="text-left">
            <h2 className="text-sm sm:text-base font-semibold text-white leading-tight">
              {i.nombre}
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
              {i.descripcion}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export { GridSkills };
