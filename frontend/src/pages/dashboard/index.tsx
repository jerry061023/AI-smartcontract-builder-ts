import React from 'react';
import AILibraryGrid from './component/aiLibraryGrid';
import WorkflowSteps from './component/workFlowSteps';
import './index.css'

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <section className="bg-white p-6 rounded shadow-md mt-4">
        <AILibraryGrid />
        <WorkflowSteps />
      </section>
    </div>
  );
};

export default Dashboard;
