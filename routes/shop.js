const express=require('express');
const shopsController=require('../controllers/shop');
const router=express.Router();


router.get('/users/shops',shopsController.getUserShops);


module.exports=router;