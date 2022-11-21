const express=require('express');
const orders=require('../controllers/order');

const router=express.Router();


router.get('/users/orders',orders.getUserOrders);

module.exports=router;