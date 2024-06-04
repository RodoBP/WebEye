import React from 'react';

function FeedbackResponse({ feedback }) {
  return (
    <textarea
      readOnly
      value={feedback}
      className="w-full h-32 p-2 border border-gray-300 rounded-lg mt-4"
      placeholder="Feedback response will appear here..."
    />
  );
}

export default FeedbackResponse;
