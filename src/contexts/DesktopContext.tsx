import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IconPosition {
  id: string;
  position: { x: number, y: number };
}

interface DesktopContextProps {
  icons: IconPosition[];
  moveIcon: (id: string, newPosition: { x: number, y: number }) => void;
}

const DesktopContext = createContext<DesktopContextProps | undefined>(undefined);

interface DesktopProviderProps {
  children: ReactNode;
}

export const DesktopProvider: React.FC<DesktopProviderProps> = ({ children }) => {
  const [icons, setIcons] = useState<IconPosition[]>([
    { id: 'folder', position: { x: 0, y: 0 } },
    { id: 'document', position: { x: 1, y: 0 } },
    { id: 'trash', position: { x: 2, y: 0 } },
  ]);

  const moveIcon = (id: string, newPosition: { x: number, y: number }) => {
    setIcons(prevIcons => {
      const currentIconIndex = prevIcons.findIndex(icon => icon.id === id);
      const targetIconIndex = prevIcons.findIndex(icon => 
        icon.position.x === newPosition.x && icon.position.y === newPosition.y
      );

      if (targetIconIndex !== -1) {
        const newIcons = [...prevIcons];
        [newIcons[currentIconIndex].position, newIcons[targetIconIndex].position] = 
          [newIcons[targetIconIndex].position, newIcons[currentIconIndex].position];
        return newIcons;
      }

      return prevIcons.map(icon => 
        icon.id === id ? { ...icon, position: newPosition } : icon
      );
    });
  };

  return (
    <DesktopContext.Provider value={{ icons, moveIcon }}>
      {children}
    </DesktopContext.Provider>
  );
};

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error('useDesktop must be used within a DesktopProvider');
  }
  return context;
};