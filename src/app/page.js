import Link from 'next/link';

export default function HomePage ()
{
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Bingo Game</h1>
      <div className="space-y-4 flex justify-around items-baseline gap-5 ">
        <Link href="/admin/login">
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Admin
          </p>
        </Link>
        <Link href="/user/game">
          <p className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            User
          </p>
        </Link>
      </div>
    </div>
  );
}
