const express=require('express');
const { addBreakfast, getAllBreakfast, upDateBreakfast,deleteBreakfast } = require('../Controllers/breakfastContollers');


const router=express.Router();
// http://localhost:3000/api/breakfast/new
router.post('/breakfast/new',addBreakfast);
// http://localhost:3000/api/allbreakfast
router.get('/allbreakfast',getAllBreakfast);  
// http://localhost:3000/api/updatebreakfast/:id
router.put('/updatebreakfast/:id',upDateBreakfast);
// http://localhost:3000/api/deletebreakfast/:id
router.delete('/deletebreakfast/:id',deleteBreakfast);  

module.exports=router;