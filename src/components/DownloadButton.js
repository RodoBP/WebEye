import React from 'react';

function DownloadButton({ text, fileType, disabled }) {
  return (
    <button
      className={`bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={() => alert(`Downloading as ${fileType}`)}
    >
      {text}
    </button>
  );
}

export default DownloadButton;
