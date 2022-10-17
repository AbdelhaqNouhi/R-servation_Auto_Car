const express = require ('express');
const router = express.Router();
const UsersController = require ('../controllers/UsersController')
const { protect } = require ('../middleware/authMiddleware')


router.get('/GetAllUser',UsersController.GetAllUsers)

router.post('/Register',UsersController.RegisterUser)

router.post('/Login', UsersController.LoginUser)

router.get('/GetToken', protect, UsersController.GetToken)

module.exports = router;