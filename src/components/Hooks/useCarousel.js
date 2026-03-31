import { useRef, useState, useEffect } from 'react';

function useCarousel() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // botones
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // progreso
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

  // touch
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  return {
    scrollRef,
    scroll,
    progress,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
  };
}

export { useCarousel };
