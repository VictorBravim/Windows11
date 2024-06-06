import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }}>
      {/* Outros conteúdos podem ser adicionados aqui no futuro */}
    </div>
  );
};

export default Hero;