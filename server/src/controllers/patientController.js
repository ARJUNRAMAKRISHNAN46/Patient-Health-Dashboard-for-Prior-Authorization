const Patient = require("../models/patientModel");

module.exports = {
  createPatient: async (req, res) => {
    try {
      const credentials = req.body;
      const patientData = await Patient.create(credentials);
      console.log("home page", patientData);
      if (!patientData) {
        res.status(404).json({
          success: false,
          data: null,
          message: "patient create failed!",
        });
        return;
      }
      console.log("🚀 ~ getTodo: ~ todos:", patientData);
      res.status(200).json({
        success: true,
        data: patientData,
        message: "patient created successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
