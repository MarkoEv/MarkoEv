import React, { useState, useEffect } from 'react';
import { blogs } from '../../data/blogs';
import { TbWorld } from 'react-icons/tb';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCarousel } from '../Hooks/useCarousel';

function HoverImages({ imagenes }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [hover, imagenes.length]);

  return (
    <figure
      className="relative h-40 sm:h-44 lg:h-48 overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndex(0);
      }}
    >
      <img
        src={imagenes[index].src}
        alt={imagenes[index].alt}
        className="w-full h-full object-cover transition-all duration-500"
        draggable="false"
      />
    </figure>
  );
}

function CarouselBlogs() {
  const {
    scrollRef,
    scroll,
    progress,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
  } = useCarousel();

  return (
    <div className="mt-5 text-center">
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 bg-white/10 p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden snap-x snap-mandatory scroll-smooth cursor-grab"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="
              group snap-center shrink-0
              w-[85vw] sm:w-[40vw] md:w-[30vw] lg:w-[32vw]
              rounded-2xl overflow-hidden
              bg-white dark:bg-neutral-900
              flex flex-col
              transition-all duration-300
            "
            >
              <div className="h-48 sm:h-52 lg:h-58 overflow-hidden">
                <HoverImages imagenes={blog.imagenes} />
              </div>

              <div className="p-4 lg:p-5 flex flex-col gap-3 flex-1">
                <header className="flex justify-between items-center">
                  <img
                    src={blog.institucion.logo}
                    alt={blog.institucion.nombre}
                    className="h-6 opacity-60"
                    draggable="false"
                  />
                  <time className="text-xs text-gray-500">
                    {new Date(blog.fecha).toLocaleDateString('es-MX')}
                  </time>
                </header>

                <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                  {blog.titulo}
                </h3>

                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {blog.descripcion}
                </p>

                <a
                  href={blog.proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs lg:text-sm mt-auto hover:opacity-80 transition"
                >
                  <TbWorld />
                  Ver proyecto
                </a>
              </div>
            </article>
          ))}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-3 bg-linear-to-r from-[#1C1C1C] to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-3 bg-linear-to-l from-[#1C1C1C] to-transparent"></div>
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 bg-white/10 p-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <div className="relative w-52 h-2 bg-white/70 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-green-400 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
          <div
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
          />
          <div
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export { CarouselBlogs };
