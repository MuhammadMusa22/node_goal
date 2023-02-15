const express=require('express');
const userController=require('../controllers/user');
const userSubjectsController=require('../controllers/user_subjects');

var router=express.Router();

router.all('*',async (req,res,next) => {
    console.log('All route');
    next();
});
router.get('/users',userController.getUsers);
router.post('/users',userController.createUser);
router.put('/users/:userId',userController.updateUser);
router.get('/users/:userId',userController.getSingleUserDetails);
router.post('/users/userSubjects',userSubjectsController.assignSubjectToUser);

module.exports=router;