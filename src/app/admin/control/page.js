'use client'
import { useState } from 'react';

export default function AdminControl ()
{
    const [ currentNumber, setCurrentNumber ] = useState( null );
    const [ drawnNumbers, setDrawnNumbers ] = useState( [] );
    const [ previousGameNumbers, setPreviousGameNumbers ] = useState( [] );

    const drawNumber = () =>
    {
        let randomNumber;
        do
        {
            randomNumber = Math.floor( Math.random() * 75 ) + 1;
        } while ( drawnNumbers.includes( randomNumber ) );
        setCurrentNumber( randomNumber );
        setDrawnNumbers( [ ...drawnNumbers, randomNumber ] );
    };

    const startNewGame = () =>
    {
        localStorage.setItem( 'lastGame', JSON.stringify( drawnNumbers ) );
        setCurrentNumber( null );
        setDrawnNumbers( [] );
    };

    const loadPreviousGame = () =>
    {
        const lastGame = localStorage.getItem( 'lastGame' );
        if ( lastGame )
        {
            setPreviousGameNumbers( JSON.parse( lastGame ) );
        } else
        {
            alert( 'No previous game found' );
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Bingo Game</h1>
            <div className="text-center mb-4">
                <button onClick={drawNumber} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Draw Number
                </button>
                <button onClick={startNewGame} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                    Start New Game
                </button>
                <button onClick={loadPreviousGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                    Load Previous Game
                </button>
            </div>
            <div className="text-center mb-8">
                <p className="text-6xl font-bold text-blue-600">Current Number: {currentNumber}</p>
            </div>
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white">
                    <thead className="border-b">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Drawn Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-gray-900">
                                    {drawnNumbers.map( ( number, index ) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            {number}
                                        </span>
                                    ) )}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {previousGameNumbers.length > 0 && (
                <div className="overflow-x-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Previous Game Numbers</h2>
                    <table className="min-w-full bg-white">
                        <thead className="border-b">
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Previous Numbers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="text-sm leading-5 text-gray-900">
                                        {previousGameNumbers.map( ( number, index ) => (
                                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                {number}
                                            </span>
                                        ) )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
