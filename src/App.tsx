import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;