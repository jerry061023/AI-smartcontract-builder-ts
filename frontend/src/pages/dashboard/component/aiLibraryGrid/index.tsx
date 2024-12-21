import React from 'react';
import './index.css'

const AILibrary = () => {
  return (
    <div className="ai-library-container">
      <h2 className="section-title">AI Library</h2>
      <hr />
      <div className='ai-category-container'>
        <div className='ai-category'>
          <h3>DeepAI</h3>
          <h3>Sports</h3>
          <h3>Finance</h3>
          <h3>Game</h3>
          <h3>StarryAI</h3>
        </div>
        <hr />
      </div>
      <div className="ai-card-grid">
        {Array(10).fill(0).map((_, i) => (
          <OracleCard key={i} />
        ))}
      </div>
    </div>

  );
};

const OracleCard = () => {
  return (
    <>
      <div className="oracle-card">
        <img className='card-image' src='/images/card-img.jpg' alt='LOGO' />
        <div className="card-title">StarryAI</div>
      </div>
    </>
  )
}

export default AILibrary;
