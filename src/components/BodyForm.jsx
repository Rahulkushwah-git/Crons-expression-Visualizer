import { useFormContext } from "react-hook-form";

const BodyForm = () => {
  const { register } = useFormContext();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-[200px]">
      <div className="mb-4">
        <label className="block text-sm font-medium">Height (cm)</label>
        <input
          type="range"
          min="140"
          max="220"
          defaultValue="180"
          {...register("height")}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Weight (kg)</label>
        <input
          type="range"
          min="40"
          max="150"
          defaultValue="80"
          {...register("weight")}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Build</label>
        <select {...register("build")} defaultValue="Athletic" className="w-full p-1 rounded">
          <option value="Lean">Lean</option>
          <option value="Regular">Regular</option>
          <option value="Athletic">Athletic</option>
          <option value="Big">Big</option>
        </select>
      </div>
    </div>
  );
};

export default BodyForm;
