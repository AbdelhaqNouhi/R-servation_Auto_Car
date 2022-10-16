const express = require ('express');
const UsersController = require ('../controllers/UsersController')
const router = express.Router();


router.get('/GetUser',UsersController.GetAllUsers)

router.post('/AddUser',UsersController.AddUser)

module.exports = router;