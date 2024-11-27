import React from 'react';
import { Resource } from '../types';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {resource.subject} • Grade {resource.grade}
          </p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {resource.type}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
          {resource.downloads} downloads
        </div>
        <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          View
        </button>
      </div>
    </div>
  );
};