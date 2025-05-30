import { FormRender } from "./form-render";
import "./assignment2.css";

export default function Assignment2() {
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient">
      <div className="p-8 w-full max-w-xl bg-white rounded-xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Assignment 2</h1>
        <FormRender />
      </div>
    </div>
  );
}
