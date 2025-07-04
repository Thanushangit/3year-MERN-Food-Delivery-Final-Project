const express = require("express");
const {
  addpopular,
  getAllpopular,
  upDatepopular,
  deletepopular,
} = require("../Controllers/popularContollers");

const router = express.Router();

// https://platezybackedcode.up.railway.app/api/popular/new
router.post("/popular/new", addpopular);
// https://platezybackedcode.up.railway.app/api/allpopular
router.get("/allpopular", getAllpopular);
// https://platezybackedcode.up.railway.app/api/updatepopular/:id
router.put("/updatepopular/:id", upDatepopular);
// https://platezybackedcode.up.railway.app/api/deletepopular/:id
router.delete("/deletepopular/:id", deletepopular);
module.exports = router;
