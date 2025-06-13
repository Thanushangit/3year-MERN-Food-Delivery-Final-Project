const Food = require("../Models/Popular");

// Add new popular food
exports.addpopular = async (req, res) => {
  try {
    const data = await Food.create(req.body);
    const io = req.app.get("io");
    io.emit("popularAdded", data);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all popular foods (no socket emit here)
exports.getAllpopular = async (req, res) => {
  try {
    const data = await Food.find();
    if (!data) {
      return res.status(404).json({ message: "Food Not Found" });
    }
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update popular food
exports.upDatepopular = async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("popularUpdated", updated);
    res.status(200).json({ message: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete popular food
exports.deletepopular = async (req, res) => {
  try {
    const deleted = await Food.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("popularDeleted", deleted._id); 
    res.status(200).json({ message: deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
