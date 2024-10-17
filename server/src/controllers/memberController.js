const Members = require("../models/memberModel");
const jwt = require("jsonwebtoken");
const generateAccessToken = require("../utils/jwt/accessToken");

module.exports = {
  loginUser: async (req, res) => {
    try {
      const credentials = req.body;
      console.log(credentials);
      const existMember = await Members.findOne({ email: credentials?.email });
      if (!existMember) {
        res.status(404).json({
          success: false,
          member: null,
          message: "No user found!",
        });
        return;
      }

      const payload = {
        _id: existMember?._id,
        name: existMember?.name,
      };

      const AccessToken = generateAccessToken(payload);

      res.cookie("access_token", AccessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      
      console.log("🚀 ~ return ~ result:", AccessToken);

      res.status(200).json({
        success: true,
        member: existMember,
        message: "Log-in successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  signUpUser: async (req, res) => {
    try {
      const credentials = req.body;
      console.log("credentials", credentials);
      const existMember = await Members.findOne({ email: credentials?.email });
      if (existMember) {
        res.status(404).json({
          success: false,
          member: null,
          message: "User already exists!",
        });
        return;
      }
      const membersData = await Members.create(credentials);
      console.log("🚀 ~ signUpUser: ~ userData:", membersData);

      const payload = {
        _id: membersData?._id,
        name: membersData?.name,
      };

      const AccessToken = await generateAccessToken(payload);

      res.cookie("access_token", AccessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      console.log("🚀 ~ return ~ result:", AccessToken);

      res.status(200).json({
        success: true,
        member: membersData,
        message: "user created successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const members = await Members.find();
      res.status(200).json({
        success: true,
        member: members,
        message: "members listed successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const credentials = req.body;
      const updateMember = await Members.findOneAndUpdate(
        { email: credentials?.email },
        {
          name: credentials?.name,
          phone: credentials?.phone,
        }
      );

      console.log(updateMember);
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const credentials = req.body;
      const deletedMember = await Members.findOneAndDelete({
        email: credentials?.email,
      });
      console.log("🚀 ~ deleteUser: ~ deletedMember:", deletedMember);

      if (!deletedMember) {
        res.status(404).json({
          success: false,
          member: null,
          message: "member deletion failed!",
        });
      }
      res.status(200).json({
        success: true,
        member: null,
        message: "member deleted successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
