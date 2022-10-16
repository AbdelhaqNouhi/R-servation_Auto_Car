const express = require ('express');
const UsersController = require ('../controllers/UsersController')
const router = express.Router();


router.get('/GetAllUser',UsersController.GetAllUsers)

router.post('/Register',UsersController.RegisterUser)

router.post('/Login', UsersController.LoginUser)

module.exports = router;