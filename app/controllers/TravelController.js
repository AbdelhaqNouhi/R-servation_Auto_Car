const asyncHandler = require('express-async-handler')

const TravelModule = require('../modules/TravelModule')

exports.GetAllTravel = asyncHandler (async (req, res) => {

    try {
        const travel = await TravelModule.find();
        res.status(201).json(travel)
    } catch (error) {
        res.status(401).json({ status: 'fail'})
    }
    
})

exports.GetOneTravel = asyncHandler(async (req, res) => { 

    try {
        const travel = await TravelModule.findOne(TravelModule.id)
        res.status(201).json(travel)
    } catch (error) {
        res.status(401).json({ status: 'undefined travel'})
    }

})

exports.CreateTravel = asyncHandler(async (req, res) => {

    const {from, to, departure_time, departure_date, arrival_time, arrival_date, seat_total, reserved_seat, price, ticket_id} = req.body

    if(!from || !to || !departure_time || !departure_date || !arrival_time || !arrival_date || !seat_total || !reserved_seat || !price || !ticket_id) {
        res.status(401).json({ status: 'please add all fields' })
    }

    // const TravelExists = await TravelModule.findOne(TravelModule.id)

    // if (TravelExists) {
    //     res.status(401).json({ status: "Travel already exists" })
    // }

    const Travel = await TravelModule.create ({
        from,
        to,
        departure_time,
        departure_date,
        arrival_time,
        arrival_date,
        seat_total,
        reserved_seat,
        price,
        ticket_id
    })

    if (Travel) {
        res.status(201).json(Travel)
    }
    else {
        res.status(401).json({ status: 'invalde fields' })
    }

})

exports.UpdateTravel = asyncHandler(async (req, res) => {

    const travel = await TravelModule.findById(req.params.id)

    if (!travel) {
        res.status(401).status({ status: 'travel not found' })
    }

    const UpdatedTravel = await TravelModule.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (UpdatedTravel) {
        res.status(201).json(UpdatedTravel)
    }
})

exports.DeleteTravel = asyncHandler(async (req, res) => {

    const travel = await TravelModule.findById(req.params.id)

    if (!travel) {
        res.status(401).status({ status: 'travel not found' })
    }
    
    const DeletedTravel = await travel.remove()

    if (DeletedTravel) {
        // res.status(201).status({ status: 'travel deleted successfully'})
        res.status(201).status({ id: req.params.id})
    }
})