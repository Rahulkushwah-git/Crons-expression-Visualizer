import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import BodyForm from "../components/BodyForm";
import UploadAndTextBox from "../components/UploadAndTextBox";
import CanvasModel from "../canvas";
import Image from "../assets/placeholder.png"; // use a placeholder image

const CustomizerForm = () => {
  const methods = useForm();
  const [viewMode, setViewMode] = useState("image"); // 'image' | '3d'

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setViewMode((prev) => (prev === "image" ? "3d" : "image"));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6 flex flex-col md:flex-row gap-6">
        <BodyForm />
        <UploadAndTextBox register={methods.register} setValue={methods.setValue} />
        <div className="flex-1">
          {viewMode === "image" ? (
            <img src={Image} alt="Design preview" className="w-full" />
          ) : (
            <CanvasModel />
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default CustomizerForm;
