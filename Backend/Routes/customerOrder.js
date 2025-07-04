const express=require('express');
const { addCustomerOrder, getAllCustomerOrder, upDateCustomerOrder, deleteCustomerOrder, getOrderByFirebaseUID, getAllOrderByFirebaseUID } = require('../Controllers/customerOrder');
const router=express.Router();

// https://platezybackedcode.up.railway.app/order/customerOrder/new
router.post('/customerOrder/new',addCustomerOrder);
// https://platezybackedcode.up.railway.app/order/allcustomerOrder
router.get('/allcustomerOrder',getAllCustomerOrder);  
// https://platezybackedcode.up.railway.app/order/updatecustomerOrder/:id
router.put('/updatecustomerOrder/:id',upDateCustomerOrder);
// https://platezybackedcode.up.railway.app/order/deletecustomerOrder/:id
router.delete('/deletecustomerOrder/:id',deleteCustomerOrder);  
// https://platezybackedcode.up.railway.app/order/getSingleorder/:uid
router.get('/getSingleorder/:uid', getOrderByFirebaseUID);

// https://platezybackedcode.up.railway.app/order/getAllorderByuid/:uid
router.get('/getAllorderByuid/:uid', getAllOrderByFirebaseUID);
module.exports=router;

