import React from 'react';

function CarouselEnterprises({ items }) {
  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{
          animation: `scrollProjects ${items.length * 10}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-6 min-w-30 sm:min-w-40"
          >
            <img
              src={item.icono}
              alt={item.nombre || 'skill'}
              className="w-20 h-20  sm:w-22 sm:h-22 object-contain opacity-80 hover:opacity-100 transition"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full  w-10 bg-linear-to-r from-[#1C1C1C] to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-[#1C1C1C] to-transparent"></div>
    </div>
  );
}

export { CarouselEnterprises };
