import React from 'react';
import { CarouselLenguages } from './CarouselLenguages';
import { CarouselProjects } from './CarouselProjects';
import { lenguajes } from '../../data/carousel';

function SkillsCarrusel() {
  return (
    <>
      {/* <CarouselProjects items={lenguajes} /> */}
      <CarouselLenguages items={lenguajes} />
    </>
  );
}

export { SkillsCarrusel };
