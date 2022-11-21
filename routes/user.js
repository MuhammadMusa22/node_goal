const express=require('express');
const userController=require('../controllers/user');

var router=express.Router();

router.all('*',async (req,res,next) => {
    console.log('All route');
    next();
});
router.get('/users',userController.getUsers);

module.exports=router;