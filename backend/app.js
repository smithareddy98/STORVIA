
const client = require("@prometheus-io/client");
const express = require("express");
const cors = require("cors");

const fileRoutes = require("./routes/fileRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Prometheus monitoring
const register = new client.Registry();

client.collectDefaultMetrics({ register });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Storvia Backend Running");
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "STORVIA Backend",
    timestamp: new Date().toISOString(),
  });
});

// Prometheus metrics
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

module.exports = app;