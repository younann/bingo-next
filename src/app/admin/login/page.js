'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin ()
{
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const router = useRouter();

    const handleLogin = () =>
    {
        if ( username === 'admin' && password === 'password@7722!!' )
        {
            router.push( '/admin/control' );
        } else
        {
            alert( 'Invalid credentials' );
        }
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-y-5">
            <h1 className="text-7xl text-blue-700">Bingo Game</h1>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex flex-col">
                    <input type="text" placeholder="Username" value={username} onChange={( e ) => setUsername( e.target.value )} className="mb-2 p-2 border rounded" />
                    <input type="password" placeholder="Password" value={password} onChange={( e ) => setPassword( e.target.value )} className="mb-4 p-2 border rounded" />
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
