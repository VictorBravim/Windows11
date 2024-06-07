'use client'
import React, { useState } from 'react';
import { IoWifi, IoVolumeHighOutline } from "react-icons/io5";
import { GoBell, GoGear } from "react-icons/go";
import { IoIosArrowUp, IoIosPower } from "react-icons/io";
import Image from 'next/image';
import windows from '@/assets/menu.png';
import store from '@/assets/store.png';
import archive from '@/assets/archive.png';
import google from '@/assets/google.png';
import vscode from '@/assets/vscode.png';
import clima from '@/assets/clima.png';
import photoshop from '@/assets/photoshop.png';
import figma from '@/assets/figma.png';
import amd from '@/assets/amd.png';
import advanced from '@/assets/advanced.png';
import obs from '@/assets/obs.png';
import nota from '@/assets/nota.png';
import security from '@/assets/security.png';
import calculadora from '@/assets/calculadora.png';
import paint from '@/assets/paint.png';
import victor from '@/assets/victor.png'

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
                <div className="fixed bottom-0 left-0 w-full h-full bg-transparent flex justify-center items-center" onClick={handleMenuToggle}>
                    <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <input type="text" placeholder="Pesquisar" className="bg-gray-900 w-full border border-gray-700 rounded-full p-1 mb-4" />
                        <div className="grid grid-cols-6 gap-4 mt-6 mb-12">
                            <div className="w-20 h-20">
                                <Image src={vscode} alt="vscode" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={photoshop} alt="photoshop" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={figma} alt="figma" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={amd} alt="amd" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={advanced} alt="advanced" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={obs} alt="obs" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={nota} alt="nota" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={security} alt="security" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={calculadora} alt="calculadora" width={50} height={50} />
                            </div>
                            <div className="w-20 h-20">
                                <Image src={paint} alt="paint" width={50} height={50} />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between mt-4 border-t border-gray-500 pt-4">
                            <div className="flex items-center">
                                <Image src={victor} alt="user" width={40} height={40} />
                                <span className="ml-2">Victor Bravim</span>
                            </div>
                            <div className="flex ml-4 gap-4 text-lg">
                                <GoGear />
                                <IoIosPower />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center space-x-2 pr-24">
                <Image src={clima} alt="Windows Menu" width={100} height={32} />
            </div>
            <div className="flex-1 flex justify-center space-x-2">
                <button className={`bg-transparent rounded-md p-2 hover:bg-gray-700 ${menuOpen ? 'bg-gray-700' : ''}`} onClick={handleMenuToggle}>
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