import React from "react";
import { useTheme } from "../../context/ThemeContext";

const PatientDetails = ({ patient, onCreateAuthorization }) => {
  const { theme } = useTheme();

  if (!patient) {
    return (
      <div
        className={`
        bg-${theme === "dark" ? "gray-800" : "white"}
        rounded-lg shadow-lg h-full p-4
      `}
      >
        <div
          className={`
          text-center
          ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
        `}
        >
          Select a patient from the list to view their details
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
      ${theme === "dark" ? "bg-gray-800" : "bg-white"}
      rounded-lg shadow-lg h-full
    `}
    >
      <div
        className={`
        p-4 border-b
        ${theme === "dark" ? "border-gray-700" : "border-gray-200"}
      `}
      >
        <h2
          className={`
          text-xl font-semibold
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
        >
          Patient Details: {patient.name}
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3
              className={`
              font-medium mb-2
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
            >
              Personal Information
            </h3>
            <div
              className={`
              space-y-2
              ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
            `}
            >
              <p>Age: {patient.age}</p>
              <p>Condition: {patient.condition}</p>
              <p>Insurance: {patient.insurance}</p>
              <p>Last Visit: {patient.lastVisit}</p>
            </div>
          </div>
          <div>
            <h3
              className={`
              font-medium mb-2
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
            >
              Recent Treatments
            </h3>
            <ul
              className={`
              list-disc pl-4
              ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
            `}
            >
              {patient.recentTreatments.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={onCreateAuthorization}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Prior Authorization
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
