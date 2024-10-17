import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import Login from "./pages/authentications/Login";
import Signup from "./pages/authentications/Signup";
import SettingsPage from "./pages/settings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* <Route path="/authorizations" element={<Authorizations />} /> */}
      </Routes>
    </div>
  );
};

export default App;
