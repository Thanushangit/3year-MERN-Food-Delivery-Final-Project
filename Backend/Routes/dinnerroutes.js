const express=require('express');
const { addDinner, getAllDinner, upDateDinner, deleteDinner } = require('../Controllers/dinner');

const router=express.Router();

// https://platezybackedcode.up.railway.app/api/dinner/new
router.post('/dinner/new',addDinner);
// https://platezybackedcode.up.railway.app/api/alldinner
router.get('/alldinner',getAllDinner);  
// https://platezybackedcode.up.railway.app/api/updatedinner/:id
router.put('/updatedinner/:id',upDateDinner);
// https://platezybackedcode.up.railway.app/api/deletedinner/:id
router.delete('/deletedinner/:id',deleteDinner);  
module.exports=router;