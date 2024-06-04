import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AnalysisOutput({ analysis }) {
  return (
    <textarea
      r
      value={analysis}
      className="w-full h-64 p-2 border border-gray-300 rounded-lg mt-4"
      placeholder="Analysis will appear here..."
    />
  );
}

// function AnalysisOutput({ analysis }) {
//   return (
//     <>
//       <FloatingLabel controlId="analysisOutput" label="Analysis">
//         <Form.Control
//           as="textarea"
//           placeholder="Analysis will appear here..."
//           style={{ height: '175px' }}
//           value={analysis}
//           className="w-full h-64 p-2 border border-gray-300 rounded-lg mt-4"
//         />
//       </FloatingLabel>
//     </>
//   );
// }


export default AnalysisOutput;
