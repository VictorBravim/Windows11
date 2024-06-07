import React from 'react';
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

    return (
        <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-1">
            <div className="flex items-center space-x-2 pr-24">
                <Image src={clima} alt="Windows Menu" width={100} height={32} />
            </div>
            <div className="flex-1 flex justify-center space-x-2">
                <button className="bg-transparent hover:bg-gray-700 rounded-md p-2">
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