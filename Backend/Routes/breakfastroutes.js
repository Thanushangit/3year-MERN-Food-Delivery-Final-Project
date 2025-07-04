const express = require("express");
const {
  addBreakfast,
  getAllBreakfast,
  upDateBreakfast,
  deleteBreakfast,
} = require("../Controllers/breakfastContollers");

const router = express.Router();
// https://platezybackedcode.up.railway.app/api/breakfast/new
router.post("/breakfast/new", addBreakfast);
// https://platezybackedcode.up.railway.app/api/allbreakfast
router.get("/allbreakfast", getAllBreakfast);
// https://platezybackedcode.up.railway.app/api/updatebreakfast/:id
router.put("/updatebreakfast/:id", upDateBreakfast);
// https://platezybackedcode.up.railway.app/api/deletebreakfast/:id
router.delete("/deletebreakfast/:id", deleteBreakfast);

module.exports = router;
