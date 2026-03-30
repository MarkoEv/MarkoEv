import React from 'react';
import { certificates } from '../../data/certificates';
import { CarouselCertificates } from '../Carrusels/CarouselCertificates';
import { CarouselEnterprises } from '../Carrusels/CarouselEnterprises';
import { enterprises } from '../../data/enterprises';

function Certificates() {
  return (
    <section aria-labelledby="projects-title" className="bg-[#1c1c1c] py-16">
      <div className="px-4 sm:px-12 lg:px-36">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Mis{' '}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>
        </header>
        <CarouselCertificates certificates={certificates} />
        <div className="mt-14 opacity-90">
          <CarouselEnterprises items={enterprises} />
        </div>
      </div>
    </section>
  );
}

export { Certificates };
