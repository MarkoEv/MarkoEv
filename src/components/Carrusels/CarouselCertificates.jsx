import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

function CarouselCertificates({ certificates }) {
  const scrollRef = useRef();
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const current = container.scrollLeft;
    setProgress((current / maxScroll) * 100 || 0);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  // touch drag
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  return (
    <div className="mt-5 text-center ">
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 lg:-translate-x-14 -translate-x-4 z-10 bg-black/80 p-3 rounded-full transition"
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 scroll-smooth snap-x snap-mandatory overflow-hidden cursor-grab"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="group snap-center relative rounded-2xl bg-black transition-all duration-300 overflow-hidden shrink-0 w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-90"
            >
              <div className="h-48 sm:h-52 lg:h-58 rounded-t-2xl overflow-hidden">
                <img
                  src={certificate.imagen}
                  alt={`certificate ${certificate.nombre}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4 lg:p-5 rounded-2xl">
                <h3 className="font-semibold text-sm lg:text-base">
                  {certificate.nombre}
                </h3>
              </div>

              <div
                className="
                  px-4 pb-4
                  lg:absolute lg:bottom-0 lg:left-0 lg:right-0
                  lg:bg-black/90 lg:rounded-2xl lg:p-5
                  lg:translate-y-full lg:opacity-0
                  lg:group-hover:translate-y-0 lg:group-hover:opacity-100
                  lg:transition-all lg:duration-500
                "
              >
                <h3 className="hidden lg:block font-semibold text-base mb-2">
                  {certificate.nombre}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 lg:translate-x-14 md:translate-x-14 translate-x-4 z-10 bg-black/80 p-3 rounded-full transition"
          aria-label="Siguiente"
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
            className="absolute left-0 top-0 h-full w-1/2 cursor-pointer z-10"
          />
          <div
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 h-full w-1/2 cursor-pointer z-10"
          />
        </div>
      </div>
    </div>
  );
}

export { CarouselCertificates };
