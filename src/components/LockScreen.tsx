'use client'
import React, { useState, useEffect } from 'react';

const LockScreen: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/bg.jpg')` }} onClick={onClick}>
      <div className="text-white text-6xl">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default LockScreen;
