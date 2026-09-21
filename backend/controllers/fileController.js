const cloudinary = require("../utils/cloudinary");
const File = require("../models/File");

// =======================
// UPLOAD FILE
// =======================
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "storvia",
      resource_type: "auto",
    });

    const newFile = await File.create({
      originalName: req.file.originalname,
      url: result.secure_url,
      publicId: result.public_id,
      fileType: req.file.mimetype,
      fileSize: req.file.size,

      // Save the logged-in user
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (error) {
    console.error("Upload Error:", error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};


// =======================
// GET USER FILES
// =======================
const getFiles = async (req, res) => {
  try {
    const files = await File.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      files,
    });
  } catch (error) {
    console.error("Get Files Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch files",
    });
  }
};


// =======================
// DELETE USER FILE
// =======================
const deleteFile = async (req, res) => {
  try {
    const file = await File.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    await cloudinary.uploader.destroy(file.publicId);

    await File.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);

    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};


module.exports = {
  uploadFile,
  getFiles,
  deleteFile,
};