const express=require('express');
const subjectsController=require('../controllers/subject');

var router=express.Router();

router.all('*',async (req,res,next) => {
    console.log('All routes of subjects');
    next();
});
router.get('/subjects',subjectsController.getUsers);
router.post('/subjects',subjectsController.createSubject);

module.exports=router;