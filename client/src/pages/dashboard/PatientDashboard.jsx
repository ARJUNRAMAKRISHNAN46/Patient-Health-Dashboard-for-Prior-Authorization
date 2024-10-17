import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import Layout from '../../components/layout/Layout';
import PatientList from '../../components/dashboard/PatientList';
import PatientDetails from '../../components/dashboard/PatientDetails';
import AuthorizationModal from '../../components/modals/AuthorizationModal';
import { MOCK_PATIENTS } from '../../utils/constants';
import { AlertCircle } from 'lucide-react';

const PatientDashboard = () => {
  const { theme } = useTheme();
  const [patients, setPatients] = useState(MOCK_PATIENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPatients(MOCK_PATIENTS);
        setError(null);
      } catch (err) {
        setError('Failed to load patients. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCreateAuthorization = () => {
    setModalOpen(true);
  };

  const handleModalSubmit = async (formData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setModalOpen(false);
    } catch (error) {
      console.error('Failed to create authorization:', error);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className={`
            animate-spin rounded-full h-12 w-12 border-4 
            ${theme === 'dark' 
              ? 'border-gray-400 border-t-blue-500' 
              : 'border-gray-200 border-t-blue-600'}
          `} />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className={`
          flex items-center justify-center min-h-screen
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
        `}>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span>{error}</span>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`
            text-2xl font-bold
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
          `}>
            Patient Dashboard
          </h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Authorization
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <PatientList
              patients={filteredPatients}
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onPatientSelect={handlePatientSelect}
              selectedPatientId={selectedPatient?.id}
            />
          </div>
          <div className="lg:col-span-2">
            <PatientDetails
              patient={selectedPatient}
              onCreateAuthorization={handleCreateAuthorization}
            />
          </div>
        </div>

        <AuthorizationModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
          patient={selectedPatient}
        />
      </div>
    </Layout>
  );
};

export default PatientDashboard;