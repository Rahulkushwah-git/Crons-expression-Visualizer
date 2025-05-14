import React, { useState } from "react";

const UploadAndTextBox = ({ register, setValue }) => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
    setValue("design", file);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="border-dashed border-2 p-4 rounded text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {image ? (
          <img src={image} alt="Preview" className="w-1/4 mx-auto" />
        ) : (
          "Drop an image here or select a file below"
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files[0])}
          className="mt-2"
        />
      </div>
      <textarea
        rows="3"
        maxLength="120"
        placeholder="my shirt "
        {...register("text")}
        className="border p-2 rounded resize-none"
      />
    </div>
  );
};

export default UploadAndTextBox;
