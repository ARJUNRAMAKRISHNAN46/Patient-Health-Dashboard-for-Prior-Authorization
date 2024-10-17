import React from "react";
import { X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const AuthorizationModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`
        ${theme === "dark" ? "bg-gray-800" : "bg-white"}
        rounded-lg p-6 w-full max-w-2xl mx-4
      `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className={`
            text-xl font-semibold
            ${theme === "dark" ? "text-white" : "text-gray-900"}
          `}
          >
            Create Prior Authorization
          </h2>
          <button
            onClick={onClose}
            className={
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-700"
            }
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label
              className={`
              block mb-2
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
            >
              Treatment Type
            </label>
            <input
              type="text"
              className={`
                w-full p-2 rounded border
                ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }
              `}
            />
          </div>
          <div>
            <label
              className={`
              block mb-2
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
            >
              Diagnosis Code
            </label>
            <input
              type="text"
              className={`
                w-full p-2 rounded border
                ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }
              `}
            />
          </div>
          <div>
            <label
              className={`
              block mb-2
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
            >
              Notes
            </label>
            <textarea
              className={`
                w-full p-2 rounded border h-32
                ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-300"
                }
              `}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className={`
                px-4 py-2 rounded
                ${
                  theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Submit Authorization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationModal;
