import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
  { name: 'Progress', href: '/progress', icon: ChartBarIcon },
  { name: 'Community', href: '/community', icon: UserGroupIcon },
  { name: 'Schedule', href: '/schedule', icon: CalendarIcon },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      <div className="flex items-center justify-center h-16 px-4">
        <h1 className="text-white text-xl font-bold">EduPlatform</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};