import React from 'react';
import { skills } from '../../data/skills';

function GridSkills() {
  return (
    <div
      className="
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
        gap-4
      "
    >
      {skills.map((i) => (
        <article
          key={i.id}
          className="
            group
            flex items-center gap-4 
            rounded-2xl 
            bg-white/5 
            border border-white/10
            p-4
            transition-all duration-300
            hover:bg-white/10 
            hover:scale-[1.02]
            hover:border-white/20
          "
        >
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center 
              rounded-xl bg-white/10
              transition-all duration-300
              group-hover:scale-110
            "
          >
            <img
              src={i.icono}
              alt={`Icono de ${i.nombre}`}
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>

          <div className="min-w-0">
            <h3
              className="
                text-sm lg:text-base 
                font-semibold text-white
                truncate
              "
            >
              {i.nombre}
            </h3>

            <p
              className="
                text-xs lg:text-sm 
                text-gray-400 
                line-clamp-2
              "
            >
              {i.descripcion}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export { GridSkills };
