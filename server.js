const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./user/route.js");
const chatController = require("./chat/controller.js");
const mailRoutes = require("./mail/mail.js");

// Apply Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatController);
app.use("/api/mail", mailRoutes);

// Root check
app.get("/", (req, res) => {
  res.send("✅ Backend server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
