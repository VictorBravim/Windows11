'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoWifi, IoVolumeHighOutline } from "react-icons/io5";
import { GoBell, GoGear, GoSearch } from "react-icons/go";
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
import victor from '@/assets/victor.png';
import Calculadora from '@/components/Calculadora';

const Nav: React.FC = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [menuOpen, setMenuOpen] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showCalculator && !menuRef.current?.contains(event.target as Node)) {
                setShowCalculator(false);
            }
        };

        if (showCalculator) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCalculator]);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    const handleCalculatorClick = () => {
        setShowCalculator(true);
        setMenuOpen(false);
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen, showCalculator]);

    return (
        <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-1">
            {showCalculator && (
                <div className="fixed inset-0 flex justify-center items-center bg-transparent z-40">
                    <div className="relative">
                        <Calculadora />
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed bottom-0 left-0 w-full h-full bg-transparent flex justify-center items-center">
                    <div ref={menuRef} className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="relative w-full mb-4">
                            <GoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Pesquisar" className="bg-gray-900 w-full border border-gray-700 rounded-full p-1 pl-10" />
                        </div>
                        <div className="w-full flex items-center justify-between mt-2">
                            <div className="flex items-center text-sm">
                                <span className="ml-4">Fixado</span>
                            </div>
                            <button className="flex ml-4 gap-4 text-sm bg-gray-900 bg-opacity-70 p-1 px-4 rounded-lg">
                                <span>Aplicativos</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-6 gap-4 mt-6 mb-24">
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={vscode} alt="vscode" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={photoshop} alt="photoshop" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={figma} alt="figma" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={amd} alt="amd" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={advanced} alt="advanced" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={obs} alt="obs" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={nota} alt="nota" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
                                <Image src={security} alt="security" width={50} height={50} />
                            </div>
                            <div onClick={handleCalculatorClick} className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md cursor-pointer">
                                <Image src={calculadora} alt="calculadora" width={50} height={50} />
                            </div>
                            <div className="flex items-center justify-center w-20 h-20 hover:bg-gray-900 hover:bg-opacity-50 rounded-md">
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
                <button className={`bg-transparent rounded-md p-2 hover:bg-gray-700 hover:bg-opacity-50 ${menuOpen ? 'bg-gray-700' : ''}`} onClick={handleMenuToggle}>
                    <Image src={windows} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2">
                    <Image src={store} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2">
                    <Image src={archive} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2">
                    <Image src={google} alt="Windows Menu" width={28} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-50 rounded-md p-2">
                    <Image src={vscode} alt="Windows Menu" width={28} height={32} />
                </button>
            </div>
            <div className="flex items-center text-xl space-x-2 pr-2">
                <IoIosArrowUp className='mr-2 text-xl hover:bg-gray-700 hover:bg-opacity-50 rounded-md' />
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