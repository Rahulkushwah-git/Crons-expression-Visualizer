import React from 'react';

const TextInputBox = ({ register }) => (
  <textarea
    {...register('customText')}
    rows={3}
    placeholder="Enter text for the T-shirt (max 3 lines)"
    className="w-full p-2 border mt-4 resize-none rounded"
    maxLength={180}
  />
);

export default TextInputBox;
