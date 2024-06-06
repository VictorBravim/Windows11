'use client'
import React from 'react';
import DesktopIcon from './DesktopIcon';
import { FaFolder, FaFile, FaTrash } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('/bg.jpg')` }}>
      <DesktopIcon icon={FaFolder} label="Pasta" />
      <DesktopIcon icon={FaFile} label="Documento" />
      <DesktopIcon icon={FaTrash} label="Lixeira" />
    </div>
  );
};

export default Hero;