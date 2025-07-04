const express=require('express');
const { addLunch, getAllLunch, upDateLunch, deleteLunch } = require('../Controllers/lunchContollers ');

const router=express.Router();

// https://platezybackedcode.up.railway.app/api/lunch/new
router.post('/lunch/new',addLunch);
// https://platezybackedcode.up.railway.app/api/AllLunch
router.get('/AllLunch',getAllLunch);  
// https://platezybackedcode.up.railway.app/api/updatelunch/:id
router.put('/updatelunch/:id',upDateLunch);
// https://platezybackedcode.up.railway.app/api/deletelunch/:id
router.delete('/deletelunch/:id',deleteLunch);  
module.exports=router;