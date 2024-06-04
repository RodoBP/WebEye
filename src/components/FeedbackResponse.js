import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

// function FeedbackResponse({ feedback }) {
//   return (
//     <textarea
//       readOnly
//       value={feedback}
//       className="w-full h-32 p-2 border border-gray-300 rounded-lg mt-4"
//       placeholder="Feedback response will appear here..."
//     />
//   );
// }

function FeedbackResponse({ feedback }) {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Feedback response will appear here...">
        <Form.Control
          as="readonly"
          value={feedback}
          className="w-full h-32 p-2 border border-gray-300 rounded-lg mt-4"
          placeholder="Feedback response will appear here..."
          style={{ height: '175px' }}
        />
      </FloatingLabel>
    </>
  );
}

export default FeedbackResponse;
