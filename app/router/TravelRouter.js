const express = require('express');
const router = express.Router();
const TravelController = require('../controllers/TravelController')


router.get('/GetAllTravel', TravelController.GetAllTravel)

router.get('/GetOneTravel', TravelController.GetOneTravel)

router.post('/CreateTravel', TravelController.CreateTravel)

router.post('/UpdateTravel', TravelController.UpdateTravel)

router.post('/DeleteTravel', TravelController.DeleteTravel)


module.exports = router;