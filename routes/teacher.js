const express=require('express');
const teacherController=require('../controllers/teacher');
const userSubjectsController=require('../controllers/user_subjects');

var router=express.Router();

router.all('*',async (req,res,next) => {
    console.log('All route');
    next();
});
router.get('/teacher',teacherController.getTeachers);
router.post('/teacher',teacherController.createTeacher);
router.get('/teacher/:teacherId',teacherController.getSingleTeacherDetails);

module.exports=router;