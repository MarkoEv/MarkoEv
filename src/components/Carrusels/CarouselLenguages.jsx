import React from 'react';

function CarouselLenguages({ items, direction }) {
  return (
    <div className="w-full overflow-hidden relative opacity-60">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{
          animation: `${direction} ${items.length * 5}s linear infinite`,
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
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-80 hover:opacity-100 transition"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full  w-30 bg-linear-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-30 bg-linear-to-l from-black to-transparent"></div>
    </div>
  );
}

export { CarouselLenguages };
