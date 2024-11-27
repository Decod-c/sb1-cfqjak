import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={user.avatar}
            alt={user.name}
          />
          <span className="ml-3 text-gray-700">{user.name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <BellIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};