import React from 'react';
import { useFormContext } from 'react-hook-form';

const BodyControls = () => {
  const { register } = useFormContext();

  return (
    <div className="w-[220px] p-4 border rounded shadow bg-white">
      <label className="block text-sm font-medium">Height (cm)</label>
      <input type="range" min="140" max="220" defaultValue={180} {...register('height')} className="w-full" />
      <label className="block text-sm font-medium mt-4">Weight (kg)</label>
      <input type="range" min="40" max="150" defaultValue={80} {...register('weight')} className="w-full" />
      <label className="block text-sm font-medium mt-4">Build</label>
      <select {...register('build')} defaultValue="Athletic" className="w-full mt-1 p-1 border rounded">
        <option value="Lean">Lean</option>
        <option value="Regular">Regular</option>
        <option value="Athletic">Athletic</option>
        <option value="Big">Big</option>
      </select>
    </div>
  );
};

export default BodyControls;
