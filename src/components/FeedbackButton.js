import React from 'react';
import Button from 'react-bootstrap/Button';

function FeedbackButton({ text, onClick }) {
  return (
    // <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClick}>
    //   {text}
    // </button>
    <div className="d-grid gap-2 mt-4">
      <Button variant="success" size="lg">
        {text}
      </Button>
    </div>
  );
}

export default FeedbackButton;
