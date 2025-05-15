import React, { useState } from 'react';

const UploadPreview = ({ setValue }) => {
  const [preview, setPreview] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
    setValue('design', file);
  };

  return (
    <div className="w-[28%]">
      <div className="border-dashed border-2 p-4 rounded text-center" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        {preview ? <img src={preview} alt="Preview" className="w-full" /> : 'Drop an image or click to upload'}
        <input type="file" onChange={(e) => handleFile(e.target.files[0])} className="mt-2" />
      </div>
      {preview && <img src={preview} alt="Thumbnail" className="w-1/2 mt-2 mx-auto" />}
    </div>
  );
};

export default UploadPreview;
