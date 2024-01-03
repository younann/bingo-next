'use client'
import { useState, useEffect } from 'react';

export default function UserGame ()
{
    const [ bingoCard, setBingoCard ] = useState( [] );
    const [ markedNumbers, setMarkedNumbers ] = useState( [] );
    const [ userName, setUserName ] = useState( '' );
    const [ nameEntered, setNameEntered ] = useState( false );

    useEffect( () =>
    {
        generateBingoCard();
    }, [] );

    const generateBingoCard = () =>
    {
        let cardNumbers = new Set();
        while ( cardNumbers.size < 24 )
        {
            cardNumbers.add( Math.floor( Math.random() * 75 ) + 1 );
        }
        setBingoCard( [ ...cardNumbers ] );
    };

    const toggleMarkNumber = ( number ) =>
    {
        if ( markedNumbers.includes( number ) )
        {
            setMarkedNumbers( markedNumbers.filter( ( num ) => num !== number ) );
        } else
        {
            setMarkedNumbers( [ ...markedNumbers, number ] );
        }
    };

    const handleNameSubmit = ( e ) =>
    {
        e.preventDefault();
        if ( userName.trim() !== '' )
        {
            setNameEntered( true );
        }
    };

    if ( !nameEntered )
    {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <form onSubmit={handleNameSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={userName}
                        onChange={( e ) => setUserName( e.target.value )}
                        className="mb-2 p-2 border rounded dark:text-blue-500 "
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Enter Game
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Welcome, {userName}</h1>
            <div className="grid grid-cols-5 gap-4">
                {bingoCard.map( ( number, index ) => (
                    <div key={index}
                        className={`p-4 border rounded ${ markedNumbers.includes( number ) ? 'bg-green-200 dark:bg-green-700' : 'bg-white dark:bg-gray-800' } 
                    text-gray-900 dark:text-white`}
                        onClick={() => toggleMarkNumber( number )}>
                        {number}
                    </div>
                ) )}
            </div>
        </div>
    );
}
