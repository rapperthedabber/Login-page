const router = require('express').Router();
const userRoutes = require('./useRoutes');

router.use('/users', userRoutes);

module.exports = router;