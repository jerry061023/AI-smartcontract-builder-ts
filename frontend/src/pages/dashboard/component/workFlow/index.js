import React from 'react';
import './index.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const Workflow = () => {
  const navigate = useNavigate()

  const steps = [
    'Requirement Analysis',
    'Code Generation',
    'Code Review',
    'Test Script Creation',
    'Deployment',
  ];

  const createIdea = () => {
    navigate('/contract-builder')
  }

  return (
    <div className="workflow-container">
      <textarea
        className="workflow-input"
        placeholder="Input new idea..."
      />
      <div className="text-center">
        <button className="create-button" onClick={createIdea}>Create</button>
      </div>
    </div>
  );
};

export default Workflow;