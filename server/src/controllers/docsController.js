const Docs = require("../models/docModel");

module.exports = {
  getDocs: async (req, res) => {
    try {
      const documents = await Docs.find();
      console.log("home page", documents);
      if (!documents) {
        res.status(404).json({
          success: false,
          data: null,
          message: "Document fetching failed!",
        });
        return;
      }
      console.log("🚀 ~ getTodo: ~ todos:", documents);
      res.status(200).json({
        success: true,
        data: documents,
        message: "Documents fetched successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },

  addDocs: async (req, res) => {
    try {
      const documentData = req.body;
      console.log("🚀 ~ addDocs: ~ documentData:", documentData)
      const newDoc = await Docs.create(documentData);
      if (!newDoc) {
        res.status(404).json({
          success: false,
          data: null,
          message: "Document adding failed!",
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: newDoc,
        message: "Document added successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteDocs: async (req, res) => {
    try {
      const credentials = req.body;
      const deletedDoc = await Docs.findByIdAndDelete(credentials?._id);
      console.log("something", deletedDoc);
      if (!deletedDoc) {
        res.status(404).json({
          success: false,
          data: null,
          message: "Document deletion failed!",
        });
      }
      res.status(200).json({
        success: true,
        data: deletedDoc,
        message: "Document deleted successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateDocs: async (req, res) => {
    try {
      const credentials = req.body;
      const updatedDoc = await Docs.findByIdAndUpdate(credentials?._id, {
        ...credentials,
      });
      if (!updatedDoc) {
        res.status(404).json({
          success: false,
          data: null,
          message: "Document updation failed!",
        });
      }
      console.log("something", updatedDoc);
      res.status(200).json({
        success: true,
        data: updatedDoc,
        message: "Document updated successully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
