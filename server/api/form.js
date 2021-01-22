const router = require('express').Router();
const Courses = require('../db/models/courses')


router.post('/', async (req, res, next) => {
    const one = req.body.course1.toLowerCase()
    const two = req.body.course2.toLowerCase()
    const three = req.body.course3.toLowerCase()

    if(one === 'calculus' || two === 'calculus' || three === 'calculus'){
        const courses = await Courses.create({
            course1: req.body.course1,
            course2: req.body.course2,
            course3: req.body.course3,  
        })
        res.json(courses)
    }else{
        res.send('You need atleast one input as calculus!')
    }

});


module.exports = router;
