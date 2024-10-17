import React from "react";
import { Search } from "lucide-react";
import PatientCard from "./PatientCard";
import { useTheme } from "../../context/ThemeContext";

const PatientList = ({
  patients,
  searchTerm,
  onSearchChange,
  onPatientSelect,
}) => {
  const { theme } = useTheme();

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
          text-xl font-semibold mb-4
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
        >
          Patients
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients..."
            className={`
              w-full p-2 rounded-lg pl-8
              ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }
              border
            `}
            value={searchTerm}
            onChange={onSearchChange}
          />
          <Search
            className={`
            absolute left-2 top-3 h-4 w-4
            ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
          `}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {patients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onClick={() => onPatientSelect(patient)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
