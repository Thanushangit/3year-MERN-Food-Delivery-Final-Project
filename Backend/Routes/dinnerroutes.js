const express=require('express');
const { addDinner, getAllDinner, upDateDinner, deleteDinner } = require('../Controllers/dinner');

const router=express.Router();

// http://localhost:3000/api/dinner/new
router.post('/dinner/new',addDinner);
// http://localhost:3000/api/alldinner
router.get('/alldinner',getAllDinner);  
// http://localhost:3000/api/updatedinner/:id
router.put('/updatedinner/:id',upDateDinner);
// http://localhost:3000/api/deletedinner/:id
router.delete('/deletedinner/:id',deleteDinner);  
module.exports=router;