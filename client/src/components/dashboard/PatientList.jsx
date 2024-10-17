import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import PatientCard from "./PatientCard";
import Pagination from "./Pagination";
import { useTheme } from "../../context/ThemeContext";

const ITEMS_PER_PAGE = 3;

const PatientList = ({
  patients,
  searchTerm,
  onSearchChange,
  onPatientSelect,
}) => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [patients, searchTerm]);

  const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPatients = filteredPatients.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("patient-list").scrollTop = 0;
  };

  return (
    <div
      className={`
        ${theme === "dark" ? "bg-gray-800" : "bg-white"}
        rounded-lg shadow-lg h-full flex flex-col
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

      <div id="patient-list" className="flex-1 overflow-auto p-4">
        {currentPatients.length > 0 ? (
          <div className="space-y-2">
            {currentPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onClick={() => onPatientSelect(patient)}
              />
            ))}
          </div>
        ) : (
          <div
            className={`
              text-center py-8
              ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
            `}
          >
            No patients found
          </div>
        )}
      </div>

      {filteredPatients.length > ITEMS_PER_PAGE && (
        <div
          className={`
            p-4 border-t
            ${theme === "dark" ? "border-gray-700" : "border-gray-200"}
          `}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      <div
        className={`
          px-4 py-3 text-sm
          ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
          border-t
          ${theme === "dark" ? "border-gray-700" : "border-gray-200"}
        `}
      >
        Showing {startIndex + 1} to{" "}
        {Math.min(endIndex, filteredPatients.length)} of{" "}
        {filteredPatients.length} patients
      </div>
    </div>
  );
};

export default PatientList;
