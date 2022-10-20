
const asyncHandler = require('express-async-handler')

const TicketModule = require('../modules/TicketModule')

exports.GetAllTicket = asyncHandler(async (req, res) => {

    try {
        const Ticket = await TicketModule.find().populate("CreatedBy").populate("Travel")
        res.status(201).json(Ticket)

    } catch (error) {
        res.status(401).json({ status: 'fail'})
    }

})

exports.GetOneTicket = asyncHandler(async (req, res) => {

})

exports.CreateTicket = asyncHandler(async (req, res) => {

    const { CreatedBy, Travel_id } = req.body

    if ( !CreatedBy || !Travel_id ) {
        res.status(401).status({ status: 'Please add all fields'})
    }

    const Ticket = await TicketModule.create ({
        CreatedBy,
        Travel_id
    })

    if (Ticket) {
        res.status(201).status(Ticket)
    }
    else {
        res.status(401).status({ status: 'invlide fields' })
    }
})

exports.UpdateTicket = asyncHandler(async (req, res) => {

})

exports.DeleteTicket = asyncHandler(async (req, res) => {

})