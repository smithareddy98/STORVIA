require("dotenv").config();

require("./utils/cloudinary");

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.get("/", (req, res) => {
  res.send("🚀 Storvia Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});