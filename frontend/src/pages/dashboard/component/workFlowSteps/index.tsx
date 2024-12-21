import React, { useState } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom'
import useContract from '../../../../hooks/contract';
import LoadingButton from '../../../../components/buttons';

const WorkflowSteps = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const { createContract } = useContract();

  const createIdea = async () => {
    if (!idea.trim()) {
      return;
    }
    await createContract(idea);
    navigate(`/contract-builder`)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      console.log("Enter key pressed");
      createIdea();
    }
  };

  return (
    <div className="workflow-container">
      <textarea
        className="workflow-input"
        value={idea}
        onChange={(e: any) => setIdea(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Input new idea..."
      />
      <div className="text-center">
        <LoadingButton onClick={createIdea} className="create-button">Create</LoadingButton>
      </div>
    </div>
  );
};

export default WorkflowSteps;