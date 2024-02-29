const router = require('express').Router();


// Users routes

router.use('/api/users',require('@routes/user'));
router.use('/api/tasks',require('@routes/task'));

module.exports = router;