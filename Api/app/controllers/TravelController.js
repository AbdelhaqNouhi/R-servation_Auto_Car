const asyncHandler = require('express-async-handler')

const TravelModule = require('../modules/TravelModule')


exports.SearchTravel = asyncHandler (async (req, res) => {

        const Search = await TravelModule.find({ from: req.params.from, to: req.params.to, departure_date: req.params.date });

        if(!Search) {
            res.status(401)
            throw new Error ('this travel not found !')
        }
        
        res.status(201).json(Search)
})

exports.GetAllTravel = asyncHandler (async (req, res) => {

    try {
        const travel = await TravelModule.find();
        res.status(201).json(travel)
    } catch (error) {
        res.status(401).json({ status: 'fail'})
    }
    
})

exports.GetTravelById = asyncHandler(async (req, res) => { 
    
    try {
        const travel = await TravelModule.findById(req.params.id)
        res.status(201).json(travel)
    } catch (error) {
        res.status(401).json({ status: 'undefined travel'})
    }

})

exports.CreateTravel = asyncHandler(async (req, res) => {

    const { from, to, departure_time, departure_date, arrival_time, arrival_date, seats_total, price } = req.body

    if (!from || !to || !departure_time || !departure_date || !arrival_time || !arrival_date || !seats_total || !price) {
        res.status(401).json({ status: 'please add all fields' })
    }

    const Travel = await TravelModule.create ({
        from,
        to,
        departure_time,
        departure_date,
        arrival_time,
        arrival_date,
        seats_total,
        price
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
        res.status(400)
        throw new Error('travel not found')
    }
    
    const UpdatedTravel = await TravelModule.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

        res.status(200).json(UpdatedTravel)

})

exports.DeleteTravel = asyncHandler(async (req, res) => {

    const travel = await TravelModule.findById(req.params.id)
    
    if (!travel) {
        res.status(400)
        throw new Error('travel not found')
    }
    const DeletedTravel = await TravelModule.findByIdAndDelete(req.params.id, { $set: { isDeleted: true }})

    res.status(200).status({ status: 'success'})
})