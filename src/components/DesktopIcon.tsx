import React from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { IconType } from 'react-icons';
import { useDesktop } from '../contexts/DesktopContext';

interface DesktopIconProps {
  id: string;
  icon: IconType;
  label: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, icon: Icon, label }) => {
  const { icons, moveIcon } = useDesktop();
  const iconPosition = icons.find(icon => icon.id === id);
  if (!iconPosition) return null;

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const newX = Math.round(data.x / 100);
    const newY = Math.round(data.y / 100);
    moveIcon(id, { x: newX, y: newY });
  };

  return (
    <Draggable
      position={{ x: iconPosition.position.x * 100, y: iconPosition.position.y * 100 }}
      grid={[100, 100]}
      onStop={handleStop}
    >
      <div className="flex flex-col items-center w-20 m-2 cursor-pointer">
        <Icon className="text-4xl" />
        <span className="text-sm text-center">{label}</span>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;