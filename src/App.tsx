import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PatientManagement from './components/PatientManagement';
import FollowUpPlan from './components/FollowUpPlan';
import DataAnalysis from './components/DataAnalysis';
import Communication from './components/Communication';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PatientManagement />} />
            <Route path="/follow-up" element={<FollowUpPlan />} />
            <Route path="/analysis" element={<DataAnalysis />} />
            <Route path="/communication" element={<Communication />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;