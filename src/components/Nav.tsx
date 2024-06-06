import React from 'react';
import { FaWifi, FaVolumeUp } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { SiVisualstudiocode } from "react-icons/si";

const Nav: React.FC = () => {
  const currentDate = new Date().toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-2">
      <div className="flex items-center space-x-2 pr-20">
      </div>
      <div className="flex-1 flex justify-center space-x-4">
        <FcGoogle className="text-2xl" />
        <SiVisualstudiocode className="text-2xl" />
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