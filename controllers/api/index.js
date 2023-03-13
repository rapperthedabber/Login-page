const router = require('express').Router();
const userRoutes = require('./useRoutes');

//router.use('/users', userRoutes);

router.post('/login', (req,res)=>{
    const newUserData = req.body
    console.log(newUserData);
    res.send(200).json({message: 'new user created!'})
}
)

module.exports = router;

