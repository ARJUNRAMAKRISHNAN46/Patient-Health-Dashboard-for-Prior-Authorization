

import React from "react";
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <PatientDashboard />
      </ThemeProvider>
    </div>
  );
};

export default App;
