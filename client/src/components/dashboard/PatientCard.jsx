import React from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const PatientCard = ({ patient, onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`
        p-3 border rounded-lg cursor-pointer
        ${
          theme === "dark"
            ? "border-gray-700 hover:bg-gray-700"
            : "border-gray-200 hover:bg-gray-50"
        }
        flex justify-between items-center
      `}
    >
      <div>
        <h3
          className={`
          font-medium
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
        >
          {patient.name}
        </h3>
        <p
          className={`
          text-sm
          ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
        `}
        >
          Age: {patient.age} | {patient.condition}
        </p>
      </div>
      <ChevronRight
        className={`
        h-4 w-4
        ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
      `}
      />
    </div>
  );
};

export default PatientCard;
