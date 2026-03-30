import React from 'react';
import { skills } from '../../data/skills';

function GridSkills() {
  return (
    <>
      {/* 📱 MOBILE (sm y menor) */}
      <div className="grid grid-cols-4   gap-6 md:hidden px-4">
        {skills.map((i) => (
          <article key={i.id} className="flex items-center gap-4">
            {/* ICONO */}
            <div className="p-[2px] rounded-full bg-gradient-to-r from-green-400 to-blue-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <img
                  src={i.icono}
                  alt={i.nombre}
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>

            {/* TEXTO */}
            <p className="sm:block hidden text-white font-medium leading-snug">
              {i.nombre}
            </p>
          </article>
        ))}
      </div>

      {/* 💻 DESKTOP (md en adelante) */}
      <div
        className="
          hidden md:grid
          grid-cols-3 
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
              p-3 lg:p-4 
              bg-white/5 
              border border-white/10
              hover:bg-white/10 
              transition-all duration-300
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <img
                src={i.icono}
                alt={i.nombre}
                className="h-6 w-6 object-contain"
              />
            </div>

            <div>
              <h2 className="text-sm text-start lg:text-base font-semibold text-white">
                {i.nombre}
              </h2>

              <p className="text-xs lg:text-sm text-gray-400 line-clamp-2">
                {i.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export { GridSkills };
