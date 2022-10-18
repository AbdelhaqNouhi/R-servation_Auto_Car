const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController')
const { protect } = require('../middleware/authMiddleware')


router.get('/Register', AdminController.RegisterAdmin)

router.post('/Login', AdminController.LoginAdmin)


module.exports = router;