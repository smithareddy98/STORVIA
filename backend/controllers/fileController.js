const cloudinary = require("../utils/cloudinary");

const uploadFile = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "storvia",
      resource_type: "auto",
    });

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: {
        originalName: req.file.originalname,
        url: result.secure_url,
        publicId: result.public_id,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};

module.exports = {
  uploadFile,
};