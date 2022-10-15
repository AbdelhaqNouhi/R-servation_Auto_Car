const express = require ('express');
const UsersController = require ('../controllers/UsersController')
const router = express.Router();
const UsersModule = require ('../modules/UsersModule')


router.get('/GetUser',UsersController.GetAllUsers)

router.post('/AddUser',UsersController.AddUser)

module.exports = router;