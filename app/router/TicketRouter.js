const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController')


router.get('GetAllTicket', TicketController.GetAllTicket)

router.get('/GetOneTicket', TicketController.GetOneTicket)

router.post('/CreateTicket', TicketController.CreateTicket)

router.get('/UpdateTicket', TicketController.UpdateTicket)

router.get('/DeleteTicket', TicketController.DeleteTicket)

module.exports = router;
