const Food = require("../Models/CustomerOrder");


exports.addCustomerOrder = async (req, res, next) => {
  try {
    console.log("Payload received:", req.body);
    const data = await Food.create(req.body);
    res.status(200).json({ message: data });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.getAllCustomerOrder = async (req, res, next) => {
  try {
    const data = await Food.find();
    if (!data) {
      return res.status(400).json({ message: "Food Not Found" });
    }
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.upDateCustomerOrder = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(400).json({ message: "Food Not Found" });
    }
    const data = await Food.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.deleteCustomerOrder = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(400).json({ message: "Food Not Found" });
    }
    const data = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getOrderByFirebaseUID = async (req, res, next) => {
  try {
    const firebaseUID = req.params.uid;

    const order = await Food.findOne({ FirebaseUID: firebaseUID }) // Get latest
      .sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({ message: "Order not found for this user" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


