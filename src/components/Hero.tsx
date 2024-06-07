import React from 'react';
import Image from 'next/image';
import trash from '@/assets/trash.png';

const Hero: React.FC = () => {
  const gridItems = new Array(169).fill(0);

  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/bg.jpg')` }}>
      <div className="grid grid-cols-18 grid-rows-10 gap-0.5 p-0.5 h-full">
        {gridItems.map((_, index) => (
          <div key={index} className="flex items-center justify-center bg-transparent h-full w-full">
            {index === 0 && (
              <Image src={trash} alt="Ícone da Lixeira" className="h-16 w-16" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;