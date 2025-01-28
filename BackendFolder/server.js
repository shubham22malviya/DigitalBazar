const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const jwtAuthMiddleware=require('./Middleware/middle');
// const User=require('./Models/User');

// Load environment variables
dotEnv.config({ path: "./.env" });

// Configure CORS
app.use(cors());
app.use(express.json()); // Configure Express to parse JSON

// Process host and port
const hostname = process.env.LOCAL_HOST_NAME || "localhost";
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });

// API Routes
const userRoute = require("./Router/router");
app.use("/user", userRoute);
//Api Routes
const productRoute=require("./Router/product");
 app.use("/create",productRoute);
// Basic route to check server status
app.get("/", (req, res) => {
  res.send("Server is working");
});



// Start the server
app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
