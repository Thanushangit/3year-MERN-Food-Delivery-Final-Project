const Food = require("../Models/Breakfast");

// Add new breakfast item
exports.addBreakfast = async (req, res) => {
  try {
    const data = await Food.create(req.body);

    const io = req.app.get("io");
    io.emit("breakfastAdded", data); 

    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all breakfast items
exports.getAllBreakfast = async (req, res) => {
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

// Update breakfast item
exports.upDateBreakfast = async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("breakfastUpdated", updated); 
    res.status(200).json({ message: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete breakfast item
exports.deleteBreakfast = async (req, res) => {
  try {
    const deleted = await Food.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Food Not Found" });
    }

    const io = req.app.get("io");
    io.emit("breakfastDeleted", deleted._id); 

    res.status(200).json({ message: deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
