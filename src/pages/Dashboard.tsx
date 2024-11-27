import React from 'react';
import { Header } from '../components/Header';
import { ResourceCard } from '../components/ResourceCard';
import { ProgressChart } from '../components/ProgressChart';
import { Resource, ProgressData, User } from '../types';

const mockUser: User = {
  name: "John Doe",
  role: "teacher",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
};

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Mathematics Fundamentals",
    type: "worksheet",
    subject: "Math",
    grade: "6",
    downloads: 1234
  },
  {
    id: "2",
    title: "Reading Comprehension",
    type: "lesson",
    subject: "English",
    grade: "5",
    downloads: 856
  }
];

const mockProgress: ProgressData[] = [
  { subject: "Math", completed: 85, total: 100 },
  { subject: "English", completed: 92, total: 100 },
  { subject: "Science", completed: 78, total: 100 }
];

export const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100">
      <Header user={mockUser} />
      <main className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Resources</h2>
            <div className="space-y-4">
              {mockResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Progress Overview</h2>
            <div className="bg-white rounded-lg shadow p-4">
              <ProgressChart data={mockProgress} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};