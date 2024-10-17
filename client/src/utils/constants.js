export const ROUTES = {
    DASHBOARD: '/dashboard',
    AUTHORIZATIONS: '/authorizations',
    SETTINGS: '/settings',
  };
  
  export const STATUS_COLORS = {
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      dark: {
        bg: 'dark:bg-yellow-900',
        text: 'dark:text-yellow-200',
      },
    },
    approved: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      dark: {
        bg: 'dark:bg-green-900',
        text: 'dark:text-green-200',
      },
    },
    denied: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      dark: {
        bg: 'dark:bg-red-900',
        text: 'dark:text-red-200',
      },
    },
  };
  
  export const PRIORITY_LEVELS = {
    high: {
      label: 'High',
      color: 'text-red-600',
      icon: 'AlertTriangle',
    },
    medium: {
      label: 'Medium',
      color: 'text-yellow-600',
      icon: 'AlertCircle',
    },
    low: {
      label: 'Low',
      color: 'text-blue-600',
      icon: 'Info',
    },
  };
  
  export const MOCK_PATIENTS = [
    {
      id: 1,
      name: "John Smith",
      age: 45,
      condition: "Hypertension",
      recentTreatments: ["Blood Pressure Medication", "Diet Consultation"],
      insurance: "Blue Cross",
      lastVisit: "2024-03-15",
      status: "Active",
      upcomingAppointment: "2024-04-01",
      priority: "medium"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      condition: "Type 2 Diabetes",
      recentTreatments: ["Insulin Therapy", "Nutritional Counseling"],
      insurance: "Aetna",
      lastVisit: "2024-03-20",
      status: "Active",
      upcomingAppointment: "2024-04-05",
      priority: "high"
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 58,
      condition: "Arthritis",
      recentTreatments: ["Physical Therapy", "Pain Management"],
      insurance: "Medicare",
      lastVisit: "2024-03-10",
      status: "Active",
      upcomingAppointment: "2024-03-25",
      priority: "low"
    },
  ];
  
  export const INSURANCE_PROVIDERS = [
    'Blue Cross',
    'Aetna',
    'UnitedHealthcare',
    'Cigna',
    'Medicare',
    'Medicaid',
    'Kaiser Permanente',
    'Humana',
  ];