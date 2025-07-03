require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server running on Railway ✅");
});

const MongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    console.log("mongodb connected succesfully...");
  } catch (err) {
    console.log("mongodb connection is fail...", err.message);
    process.exit(1);
  }
};

MongoConnection();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
