import React, { useState } from 'react';

function ImageUploader({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    onImageUpload(file);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border-dashed border-2 border-gray-400 rounded-lg">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" className="mt-4 w-64 h-64 object-cover" />}
    </div>
  );
}

export default ImageUploader;
