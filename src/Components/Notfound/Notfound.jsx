import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-mainColor mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-mainColor text-white py-2 px-4 rounded-lg">
        Go Back Home
      </Link>

    </div>
  );
}
