import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import BodyControls from '../components/BodyControls';
import UploadPreview from '../components/UploadPreview';
import TextInputBox from '../components/TextInputBox';
import CanvasModel from '../canvas/CanvasModel';

const CustomizerForm = () => {
  const methods = useForm();
  const [viewMode, setViewMode] = useState('image');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 'q') {
        setViewMode((prev) => (prev === 'image' ? '3d' : 'image'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col md:flex-row p-4 gap-6">
        <BodyControls />
        <UploadPreview setValue={methods.setValue} />
        <div className="flex-1">
          {viewMode === 'image' ? <img src="/default-design.png" alt="Design" className="w-full h-full object-contain" /> : <CanvasModel />}
        </div>
        <TextInputBox register={methods.register} />
      </form>
    </FormProvider>
  );
};

export default CustomizerForm;
