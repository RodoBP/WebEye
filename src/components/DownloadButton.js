import React from 'react';
import Button from 'react-bootstrap/Button';

function DownloadButton({ text, fileType, disabled }) {
  return (
    // <button
    //   className={`bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    //   disabled={disabled}
    //   onClick={() => alert(`Downloading as ${fileType}`)}
    // >
    //   {text}
    // </button>
    <div className="d-grid gap-2 mt-4">
      {/* <Button variant="secondary" size="lg">
        {text}
      </Button> */}
      <Button variant="secondary" size="lg">
        {text}
      </Button>
    </div>
  );
}

export default DownloadButton;
