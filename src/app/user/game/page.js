'use client'
import { useState, useEffect } from 'react';

export default function UserGame ()
{
    const [ bingoCard, setBingoCard ] = useState( [] );
    const [ markedNumbers, setMarkedNumbers ] = useState( [] );

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

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">User Bingo Game</h1>
            <div className="grid grid-cols-5 gap-4">
                {bingoCard.map( ( number, index ) => (
                    <div key={index} className={`p-4 border rounded ${ markedNumbers.includes( number ) ? 'bg-green-200' : 'bg-white' }`} onClick={() => toggleMarkNumber( number )}>
                        {number}
                    </div>
                ) )}
            </div>
        </div>
    );
}
