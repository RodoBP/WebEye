import React from 'react';

function FeedbackButton({ text, onClick }) {
  return (
    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClick}>
      {text}
    </button>
  );
}

export default FeedbackButton;
