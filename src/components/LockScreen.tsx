import React, { useState, useEffect } from 'react';
import { GoGear } from "react-icons/go";
import { IoWifi } from "react-icons/io5";

const LockScreen: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = time.toLocaleDateString('pt-BR', options);

  return (
    <div className="w-full h-full bg-cover bg-center flex flex-col justify-start items-center fixed top-0 left-0 z-50" style={{ backgroundImage: `url('/bg.jpg')` }} onClick={onClick}>
      <div className="text-white text-9xl mt-16 mb-4">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="text-white text-2xl mt-2">{formattedDate}</div>
      <div className="absolute text-2xl bottom-10 right-12 flex items-center space-x-6 text-white">
        <IoWifi />
        <GoGear />
      </div>
    </div>
  );
};

export default LockScreen;