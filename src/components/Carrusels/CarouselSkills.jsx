import React from 'react';

function CarouselSkills({ items }) {
  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <div
          className="
            flex w-max 
            gap-2
            hover:[animation-play-state:paused]
          "
          style={{
            animation: `scrollProjects ${items.length * 5}s linear infinite`,
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center 
                px-5 sm:px-6 
                min-w-28 sm:min-w-36
              "
            >
              <img
                src={item.icono}
                alt={item.nombre || 'skill'}
                className="
                  w-10 h-10 sm:w-12 sm:h-12 
                  object-contain 
                  opacity-80 hover:opacity-100 
                  transition
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-[#1C1C1C] to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-[#1C1C1C] to-transparent"></div>
    </div>
  );
}

export { CarouselSkills };
