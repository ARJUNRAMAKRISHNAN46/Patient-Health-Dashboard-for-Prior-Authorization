import React, { useState } from 'react';
import {
  Search,
  ChevronRight,
  Menu,
  X,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';

const PatientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample data - replace with API call
  const patients = [
    {
      id: 1,
      name: "John Smith",
      age: 45,
      condition: "Hypertension",
      recentTreatments: ["Blood Pressure Medication", "Diet Consultation"],
      insurance: "Blue Cross",
      lastVisit: "2024-03-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      condition: "Type 2 Diabetes",
      recentTreatments: ["Insulin Therapy", "Nutritional Counseling"],
      insurance: "Aetna",
      lastVisit: "2024-03-20"
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const AuthorizationModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isModalOpen ? '' : 'hidden'}`}>
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Create Prior Authorization</h2>
          <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Treatment Type</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Diagnosis Code</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Notes</label>
            <textarea className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 h-32"></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit Authorization
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="text-gray-300 hover:text-white lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <span className="text-white text-xl font-semibold ml-4">Healthcare Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                JS
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 w-64 z-20 pt-16`}>
        <div className="px-4 py-6">
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg">
              <Users className="h-5 w-5 mr-3" />
              Patients
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg">
              <FileText className="h-5 w-5 mr-3" />
              Authorizations
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg">
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg mt-auto">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Panel - Patient List */}
            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg shadow-lg h-full">
                <div className="p-4 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white mb-4">Patients</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search patients..."
                      className="w-full p-2 rounded-lg pl-8 bg-gray-700 text-white border border-gray-600"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {filteredPatients.map((patient) => (
                      <div
                        key={patient.id}
                        className="p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700 flex justify-between items-center"
                        onClick={() => handlePatientSelect(patient)}
                      >
                        <div>
                          <h3 className="font-medium text-white">{patient.name}</h3>
                          <p className="text-sm text-gray-400">
                            Age: {patient.age} | {patient.condition}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Patient Details */}
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg shadow-lg h-full">
                <div className="p-4 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white">
                    {selectedPatient ? `Patient Details: ${selectedPatient.name}` : 'Select a Patient'}
                  </h2>
                </div>
                <div className="p-4">
                  {selectedPatient ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium text-white">Personal Information</h3>
                          <p className="text-gray-300">Age: {selectedPatient.age}</p>
                          <p className="text-gray-300">Condition: {selectedPatient.condition}</p>
                          <p className="text-gray-300">Insurance: {selectedPatient.insurance}</p>
                          <p className="text-gray-300">Last Visit: {selectedPatient.lastVisit}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Recent Treatments</h3>
                          <ul className="list-disc pl-4 text-gray-300">
                            {selectedPatient.recentTreatments.map((treatment, index) => (
                              <li key={index}>{treatment}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => setModalOpen(true)}
                      >
                        Create Prior Authorization
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      Select a patient from the list to view their details
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <AuthorizationModal />

      {/* Overlay for sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-10"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default PatientDashboard;