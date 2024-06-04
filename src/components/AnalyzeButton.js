import React from 'react';

function AnalyzeButton({ onClick }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClick}>
      Analyze
    </button>
  );
}

export default AnalyzeButton;
