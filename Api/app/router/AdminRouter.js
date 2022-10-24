const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController')
const { protect } = require('../middleware/authMiddleware')


router.get('/GetAllAdmin', AdminController.GetAllAdmin)

router.post('/RegisterAdmin', AdminController.RegisterAdmin)

router.post('/LoginAdmin', AdminController.LoginAdmin)

module.exports = router;