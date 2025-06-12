const express=require('express');
const { addCustomerOrder, getAllCustomerOrder, upDateCustomerOrder, deleteCustomerOrder, getOrderByFirebaseUID } = require('../Controllers/customerOrder');
const router=express.Router();

// http://localhost:3000/order/customerOrder/new
router.post('/customerOrder/new',addCustomerOrder);
// http://localhost:3000/order/allcustomerOrder
router.get('/allcustomerOrder',getAllCustomerOrder);  
// http://localhost:3000/order/updatecustomerOrder/:id
router.put('/updatecustomerOrder/:id',upDateCustomerOrder);
// http://localhost:3000/order/deletecustomerOrder/:id
router.delete('/deletecustomerOrder/:id',deleteCustomerOrder);  
// http://localhost:3000/order/getSingleorder/:uid
router.get('/getSingleorder/:uid', getOrderByFirebaseUID);
module.exports=router;