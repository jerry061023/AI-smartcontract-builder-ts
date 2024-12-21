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
        {Array(10).fill().map((_, i) => (
          // <div key={i} className="ai-card">
          //   <div className="card-image"></div>
          //   <div className="card-title">StarryAI</div>
          // </div>
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
        <img className='card-image' src='/images/card-img.jpg' />
        <div className="card-title">StarryAI</div>
      </div>
    </>
  )
}

const Card = ({ title }) => (
  <div className="flex flex-col items-center bg-gray-100 p-4 rounded shadow-md">
    <div className="h-20 w-20 bg-gray-300 rounded-full mb-2"></div>
    <span className="font-semibold">{title}</span>
  </div>
);

export default AILibrary;


// import React from 'react';
// import './index.css';

// const AILibrary = () => {
//   return (
//     <div className="ai-library-container">
//       <div className="header">
//         <h2 className="section-title">AI Library</h2>
//         <div className="header-nav">
//           <span>DeepAI</span>
//           <span>Sport</span>
//           <span>Finance</span>
//           <span>Game</span>
//           <span>StarryAI</span>
//         </div>
//       </div>
//       <div className="ai-card-grid">
//         {Array(10).fill().map((_, i) => (
//           <OracleCard key={i} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const OracleCard = () => {
//   return (
//     <div className="oracle-card">
//       <img className="card-image" src="/images/card-img.jpg" alt="Card" />
//       <div className="card-title">StarryAI</div>
//     </div>
//   );
// };

// export default AILibrary;
