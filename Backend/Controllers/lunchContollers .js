const Food = require("../Models/Lunch");

// Add new lunch food
exports.addLunch = async (req, res) => {
  try {
    const data = await Food.create(req.body);

    const io = req.app.get("io");
    io.emit("lunchAdded", data); 

    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all lunch items (no socket needed)
exports.getAllLunch = async (req, res) => {
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

// Update a lunch item
exports.upDateLunch = async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("lunchUpdated", updated); 

    res.status(200).json({ message: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a lunch item
exports.deleteLunch = async (req, res) => {
  try {
    const deleted = await Food.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("lunchDeleted", deleted._id); 

    res.status(200).json({ message: deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
