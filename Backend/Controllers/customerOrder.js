const Food = require("../Models/CustomerOrder");

// Add a new customer order
exports.addCustomerOrder = async (req, res) => {
  try {
    console.log("Payload received:", req.body);
    const data = await Food.create(req.body);

    const io = req.app.get("io");
    io.emit("orderAdded", data); 

    res.status(200).json({ message: data });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get all customer orders
exports.getAllCustomerOrder = async (req, res) => {
  try {
    const data = await Food.find();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Food Not Found" });
    }
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a customer order
exports.upDateCustomerOrder = async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("orderUpdated", updated); 

    res.status(200).json({ message: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a customer order
exports.deleteCustomerOrder = async (req, res) => {
  try {
    const deleted = await Food.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("orderDeleted", deleted._id); 

    res.status(200).json({ message: deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get order by Firebase UID (latest one)
exports.getOrderByFirebaseUID = async (req, res) => {
  try {
    const firebaseUID = req.params.uid;

    const order = await Food.findOne({ FirebaseUID: firebaseUID }).sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({ message: "Order not found for this user" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get order by Firebase UID 
exports.getAllOrderByFirebaseUID = async (req, res) => {
  try {
    const firebaseUID = req.params.uid;

    // Find all orders matching this FirebaseUID, newest first
    const orders = await Food.find({ FirebaseUID: firebaseUID }).sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    // Remove the first (latest) order
    const ordersExceptLast = orders.slice(1);

    res.status(200).json(ordersExceptLast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

