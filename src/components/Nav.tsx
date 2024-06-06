import React from 'react';
import { FaWifi, FaVolumeUp } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const Nav: React.FC = () => {
  const currentDate = new Date().toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-2">
      <div className="flex-1 flex justify-center space-x-4">
        {/* Adicione os ícones centrais aqui */}
        <FaWifi className="text-2xl" />
        <FaVolumeUp className="text-2xl" />
      </div>
      <div className="flex items-center space-x-2">
        <span>{currentDate}</span>
        <FaWifi />
        <FaVolumeUp />
      </div>
    </div>
  );
};

export default Nav;