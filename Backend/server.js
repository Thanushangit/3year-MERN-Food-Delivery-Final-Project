require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");

// Route imports
const breakfast = require('./Routes/breakfastroutes');
const lunch = require('./Routes/lunchroutes');
const dinner = require('./Routes/dinnerroutes');
const popular = require('./Routes/popularroutes');
const Order = require('./Routes/customerOrder');

const app = express();
const server = http.createServer(app); // Use HTTP server for socket.io

// Setup socket.io server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Replace with your frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// Middleware
app.use(express.json());
app.use(cors());
app.set("io", io);

// Routes
app.use('/api', breakfast);
app.use('/api', lunch);
app.use('/api', dinner);
app.use('/api', popular);
app.use('/order', Order);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Platezy')
    .then(() => {
        console.log("Database is successfully connected");
    })
    .catch((err) => {
        console.log("Database connection failed:", err.message);
    });

// Socket.IO logic
io.on('connection', (socket) => {
    console.log("Client connected:", socket.id);

    socket.emit("welcome", "You are connected to the Platezy server!");

    socket.on("newOrder", (orderData) => {
        console.log("New order received:", orderData);
        
        // Broadcast to all connected clients
        io.emit("orderUpdated", orderData);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Start HTTP server instead of app.listen
server.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

