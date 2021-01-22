const router = require('express').Router();

router.use('/form', require('./form')); 

//serving up a 404 if a route doesn't exist
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;