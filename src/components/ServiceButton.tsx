import React from 'react';

interface ServiceButtonProps {
  variant?: 'outlined' | 'filled';
  onClick?: () => void;
  className?: string;
}

export const ServiceButton: React.FC<ServiceButtonProps> = ({ 
  variant = 'outlined', 
  onClick,
  className = ''
}) => {
  const isOutlined = variant === 'outlined';
  
  return (
    <button
      onClick={onClick}
      className={`w-full h-[51px] relative rounded-lg border-[1.702px] border-solid border-black transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
        isOutlined ? 'bg-transparent' : 'bg-black'
      } ${className}`}
      aria-label="Get started with this service"
    >
      <span
        className={`text-[15px] font-bold tracking-[0.613px] uppercase absolute left-[30px] top-[15px] ${
          isOutlined ? 'text-black' : 'text-white'
        }`}
      >
        GET STARTED
      </span>
      <svg
        width="38"
        height="14"
        viewBox="0 0 40 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[30px] top-[19px]"
        aria-hidden="true"
      >
        <path
          d="M39.584 7.56057C39.9162 7.22833 39.9162 6.68964 39.584 6.35739L34.1696 0.943081C33.8374 0.610832 33.2987 0.610832 32.9665 0.943081C32.6342 1.27533 32.6342 1.81401 32.9665 2.14626L37.7792 6.95898L32.9665 11.7717C32.6342 12.104 32.6342 12.6426 32.9665 12.9749C33.2987 13.3071 33.8374 13.3071 34.1696 12.9749L39.584 7.56057ZM0.697388 6.95898V7.80976H38.9824V6.95898V6.10821H0.697388V6.95898Z"
          fill={isOutlined ? "black" : "white"}
        />
      </svg>
    </button>
  );
};
