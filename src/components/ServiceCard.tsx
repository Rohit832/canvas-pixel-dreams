import React from 'react';
import { ServiceButton } from './ServiceButton';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  variant?: 'outlined' | 'filled';
  onGetStarted?: () => void;
  starIcon?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  variant = 'outlined',
  onGetStarted,
  starIcon = false
}) => {
  return (
    <article className="w-[391px] h-[570px] relative shrink-0 max-md:w-full max-md:max-w-[391px] max-md:mx-auto max-md:my-0 max-sm:w-full max-sm:max-w-full">
      <div className="w-[391px] h-[570px] absolute rounded-[17.016px] border-l-[0.851px] border-r-[4.254px] border-t-[0.851px] border-b-[4.254px] border-solid border-black left-0 top-0 max-sm:w-full" />
      
      <div className="w-[106px] h-[113px] absolute left-[285px] top-0 max-sm:left-auto max-sm:right-4">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-[106px] h-[113px] absolute left-0 top-0"
        />
        {starIcon && (
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f10502978275ebf7ce82532f1b135ce388eb3c08?width=58"
            alt="Star rating"
            className="w-[29px] h-[29px] absolute fill-black left-[49px] top-[37px]"
          />
        )}
      </div>

      <header className="absolute w-[326px] h-[199px] left-[37px] top-[108px]">
        <h3 className="w-full text-black text-[68px] font-bold leading-[60px] absolute h-full left-0 top-0 max-sm:text-5xl max-sm:leading-[52px]">
          {title}
        </h3>
      </header>

      <div className="w-[283px] h-[62px] absolute left-10 top-[328px] max-sm:w-[calc(100%_-_72px)]">
        <p className="w-full text-black text-[15px] font-normal leading-[31px] absolute h-[62px] left-0 top-0">
          {description}
        </p>
      </div>

      <div className="w-[319px] h-[51px] absolute left-[37px] top-[476px] max-sm:w-[calc(100%_-_74px)]">
        <ServiceButton 
          variant={variant} 
          onClick={onGetStarted}
          className="max-sm:w-full"
        />
      </div>
    </article>
  );
};
