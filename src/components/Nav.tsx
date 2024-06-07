'use client'
import React, { useState } from 'react';
import { IoWifi, IoVolumeHighOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import windows from '@/assets/menu.png';
import store from '@/assets/store.png';
import archive from '@/assets/archive.png';
import google from '@/assets/google.png';
import vscode from '@/assets/vscode.png';
import clima from '@/assets/clima.png';

const Nav: React.FC = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-1">
            {menuOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    {/* Conteúdo do menu */}
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                        {/* Barra de pesquisa */}
                        <input type="text" placeholder="Pesquisar" className="w-full border border-gray-300 rounded-md p-2 mb-4" />

                        {/* Aqui você pode adicionar mais conteúdo conforme necessário */}
                    </div>
                </div>
            )}

            <div className="flex items-center space-x-2 pr-24">
                <Image src={clima} alt="Windows Menu" width={100} height={32} />
            </div>

            <div className="flex-1 flex justify-center space-x-2">
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2" onClick={handleMenuToggle}>
                    <Image src={windows} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2">
                    <Image src={store} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2">
                    <Image src={archive} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2">
                    <Image src={google} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2">
                    <Image src={vscode} alt="Windows Menu" width={28} height={32} />
                </button>
            </div>

            <div className="flex items-center text-xl space-x-2 pr-2">
                <IoIosArrowUp className='pr-2 text-2xl' />
                <IoWifi />
                <IoVolumeHighOutline />
            </div>

            <div className="flex text-sm items-end space-x-2 flex-col pr-2">
                <span>{currentTime}</span>
                <span>{formattedDate}</span>
            </div>

            <div className="flex items-center text-xl space-x-2">
                <GoBell />
            </div>
        </div>
    );
};

export default Nav;