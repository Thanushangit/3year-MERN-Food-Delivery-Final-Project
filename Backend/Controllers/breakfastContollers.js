const Food = require("../Models/Breakfast");


exports.addBreakfast = async (req, res, next) => {
  try {
    const data = await Food.create(req.body);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllBreakfast = async (req, res, next) => {
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



exports.upDateBreakfast = async (req, res, next) => {
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



exports.deleteBreakfast = async (req, res, next) => {
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


