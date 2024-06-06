'use client'
import React from 'react';
import { FaFolder, FaFile, FaTrash } from 'react-icons/fa';
import DesktopIcon from './DesktopIcon';
import { DesktopProvider } from '../contexts/DesktopContext';

const Hero: React.FC = () => {
  return (
    <DesktopProvider>
      <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <DesktopIcon id="folder" icon={FaFolder} label="Pasta" />
        <DesktopIcon id="document" icon={FaFile} label="Documento" />
        <DesktopIcon id="trash" icon={FaTrash} label="Lixeira" />
      </div>
    </DesktopProvider>
  );
};

export default Hero;