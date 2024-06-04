import React from 'react';

function AnalysisOutput({ analysis }) {
  return (
    <textarea
      readOnly
      value={analysis}
      className="w-full h-64 p-2 border border-gray-300 rounded-lg mt-4"
      placeholder="Analysis will appear here..."
    />
  );
}

export default AnalysisOutput;
