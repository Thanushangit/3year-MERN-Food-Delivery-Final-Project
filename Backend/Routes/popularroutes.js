const express=require('express');
const { addpopular, getAllpopular, upDatepopular, deletepopular } = require('../Controllers/popularContollers');

const router=express.Router();

// http://localhost:3000/api/popular/new
router.post('/popular/new',addpopular);
// http://localhost:3000/api/allpopular
router.get('/allpopular',getAllpopular);  
// http://localhost:3000/api/updatepopular/:id
router.put('/updatepopular/:id',upDatepopular);
// http://localhost:3000/api/deletepopular/:id
router.delete('/deletepopular/:id',deletepopular);  
module.exports=router;