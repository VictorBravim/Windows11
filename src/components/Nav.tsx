import React from 'react';
import { FaWifi, FaVolumeUp } from 'react-icons/fa';
import Image from 'next/image';
import windows from '@/assets/menu.png';
import store from '@/assets/store.png';
import archive from '@/assets/archive.png';
import google from '@/assets/google.png';
import vscode from '@/assets/vscode.png';
import clima from '@/assets/clima.png';

const Nav: React.FC = () => {
    const currentDate = new Date().toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'short',
    });

    return (
        <div className="w-full fixed bottom-0 bg-gray-800 text-white flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-2 pr-20">
                    <Image src={clima} alt="Windows Menu" width={100} height={32} />
            </div>
            <div className="flex-1 flex justify-center space-x-4">
                <button className="bg-transparent hover:bg-gray-900 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Image src={windows} alt="Windows Menu" width={32} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-900 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Image src={store} alt="Windows Menu" width={32} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-900 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Image src={archive} alt="Windows Menu" width={32} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-900 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Image src={google} alt="Windows Menu" width={32} height={32} />
                </button>
                <button className="bg-transparent hover:bg-gray-900 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Image src={vscode} alt="Windows Menu" width={32} height={32} />
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <span>{currentDate}</span>
                <FaWifi />
                <FaVolumeUp />
            </div>
        </div>
    );
};

export default Nav;