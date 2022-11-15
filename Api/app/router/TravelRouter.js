const express = require('express');
const router = express.Router();
const TravelController = require('../controllers/TravelController')


router.get('/GetAllTravel', TravelController.GetAllTravel)

router.post('/GetTravelById/:id', TravelController.GetTravelById)

router.post('/CreateTravel', TravelController.CreateTravel)

router.put('/UpdateTravel/:id', TravelController.UpdateTravel)

router.delete('/DeleteTravel/:id', TravelController.DeleteTravel)



module.exports = router;