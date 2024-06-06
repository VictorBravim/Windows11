'use client'
import React, { useState, useEffect } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { IconType } from 'react-icons';

interface DesktopIconProps {
  icon: IconType;
  label: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label }) => {
  const initialPosition = JSON.parse(localStorage.getItem(label) || '{"x":0,"y":0}');
  const [position, setPosition] = useState<{ x: number; y: number }>(initialPosition);

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
    localStorage.setItem(label, JSON.stringify({ x: data.x, y: data.y }));
  };

  return (
    <Draggable position={position} onStop={handleStop}>
      <div className="flex flex-col items-center w-20 m-2 cursor-pointer">
        <Icon className="text-4xl" />
        <span className="text-sm text-center">{label}</span>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;