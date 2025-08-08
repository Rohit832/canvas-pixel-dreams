import React from 'react';
import { ServiceCard } from './ServiceCard';

export const WhatWeOffer: React.FC = () => {
  const handleGetStarted = (service: string) => {
    console.log(`Getting started with ${service}`);
    // Here you could navigate to a specific page, open a modal, etc.
  };

  const services = [
    {
      title: "Financial Coaching (1-on-1)",
      description: "Private, judgement-free sessions with certified experts",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/9ea98ec3e8441431f263d48dc66f16b3907fdde8?width=214",
      iconAlt: "Financial coaching icon",
      variant: "outlined" as const,
      onGetStarted: () => handleGetStarted("Financial Coaching")
    },
    {
      title: "Group Learning",
      description: "Webinars on salary structuring, tax hacks, investment planning & more",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/e01e5c17964712fd6b332228cd25772b481b952a?width=213",
      iconAlt: "Group learning icon",
      variant: "filled" as const,
      starIcon: true,
      onGetStarted: () => handleGetStarted("Group Learning")
    },
    {
      title: "DIY Digital Tools",
      description: "Budget guides, EMI calculators, tax estimators and more",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/8da22a273eb352133f9de6966e8bf02a870772de?width=213",
      iconAlt: "Digital tools icon",
      variant: "outlined" as const,
      onGetStarted: () => handleGetStarted("DIY Digital Tools")
    }
  ];

  return (
    <section className="max-w-none w-[1225px] h-[733px] relative mx-auto my-0 max-md:max-w-screen-lg max-md:w-full max-md:h-auto max-md:p-5 max-sm:max-w-screen-sm max-sm:p-4">
      <header className="w-[757px] h-16 absolute left-[234px] top-0 max-md:w-full max-md:relative max-md:mb-5 max-md:left-0 max-md:top-0">
        <h1 className="w-[757px] text-black text-center text-5xl font-bold leading-[64px] absolute h-16 left-0 top-0 max-md:text-4xl max-md:leading-[48px] max-sm:text-[28px] max-sm:leading-9">
          What We Offer
        </h1>
      </header>

      <div className="w-[602px] text-black text-center text-[19px] font-medium leading-8 absolute h-[33px] left-[311px] top-[81px] max-md:w-full max-md:relative max-md:mb-10 max-md:left-0 max-md:top-0">
        <p className="font-normal text-[19px] text-black max-sm:text-base">
          Built for modern workplaces.
        </p>
      </div>

      <div className="w-[1225px] h-[570px] absolute flex gap-[26px] left-0 top-[163px] max-md:w-full max-md:relative max-md:flex-col max-md:gap-5 max-md:h-auto max-md:left-0 max-md:top-0">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
            variant={service.variant}
            starIcon={service.starIcon}
            onGetStarted={service.onGetStarted}
          />
        ))}
      </div>
    </section>
  );
};
