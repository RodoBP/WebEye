import React from 'react';
import Button from 'react-bootstrap/Button';

function AnalyzeButton({ onClick }) {
  return (
    // <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClick}>
    //   Analyze
    // </button>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={onClick}>
        Analyze
      </Button>
    </div>
  );
}

export default AnalyzeButton;
