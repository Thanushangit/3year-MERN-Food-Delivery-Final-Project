const express=require('express');
const { addLunch, getAllLunch, upDateLunch, deleteLunch } = require('../Controllers/lunchContollers ');

const router=express.Router();

// http://localhost:3000/api/lunch/new
router.post('/lunch/new',addLunch);
// http://localhost:3000/api/AllLunch
router.get('/AllLunch',getAllLunch);  
// http://localhost:3000/api/updatelunch/:id
router.put('/updatelunch/:id',upDateLunch);
// http://localhost:3000/api/deletelunch/:id
router.delete('/deletelunch/:id',deleteLunch);  
module.exports=router;