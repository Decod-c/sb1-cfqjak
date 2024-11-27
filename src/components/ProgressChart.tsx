import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ProgressData } from '../types';

interface ProgressChartProps {
  data: ProgressData[];
}

export const ProgressChart = ({ data }: ProgressChartProps) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};