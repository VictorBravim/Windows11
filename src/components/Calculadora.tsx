import React, { useState, useEffect, useRef } from 'react';

const Calculadora: React.FC = () => {
    const [display, setDisplay] = useState('');
    const calcRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Erro');
            }
        } else if (value === 'C') {
            setDisplay('');
        } else {
            setDisplay(prevDisplay => prevDisplay + value);
        }
    };

    const offCalculator = () => {
        setDisplay('');
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (calcRef.current && !calcRef.current.contains(event.target as Node)) {
            offCalculator();
        }
    };

    const handleClickInside = () => {
        return;
    };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const buttonClass = "bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 active:bg-gray-500 text-2xl font-semibold";
    const specialButtonClass = "bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-400 active:bg-blue-300 text-2xl font-semibold";

    return (
        <div ref={calcRef} className="calculator bg-gray-800 text-white p-4 rounded-lg shadow-lg w-80">
            <div className="display bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 mb-4 text-right text-4xl rounded-md">{display || "0"}</div>
            <div className="buttons grid grid-cols-4 gap-2" onClick={handleClickInside}>
                {['7', '8', '9', 'C',
                    '4', '5', '6', '/',
                    '1', '2', '3', '*',
                    '0', '.', '=', '+',
                    '-'].map((btn, index) => (
                        <button
                            key={index}
                            className={btn === '=' || btn === 'C' ? specialButtonClass : buttonClass}
                            onClick={() => handleButtonClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Calculadora;