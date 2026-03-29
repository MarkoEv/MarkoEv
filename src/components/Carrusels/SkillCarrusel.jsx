import React from 'react';
import { CarruselRigth } from './CarruselRigth';
import { CarruselLeft } from './CarruselLeft';
import { lenguajes } from '../../data/carousel';

function SkillsCarrusel() {
  return (
    <>
      <CarruselLeft items={lenguajes} />
      <CarruselRigth items={lenguajes} />
    </>
  );
}

export { SkillsCarrusel };
