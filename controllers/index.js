const router = require('express').Router();
const userRoutes = require('./api/useRoutes');
const apiRoutes = require('./api');
const html = require('./html')


//router.use('/', userRoutes);
router.use('/api', apiRoutes);
//router.use('/user', userRoutes);
router.use('/', html)

module.exports = router;