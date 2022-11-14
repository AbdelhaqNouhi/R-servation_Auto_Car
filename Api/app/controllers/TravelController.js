const asyncHandler = require('express-async-handler')

const TravelModule = require('../modules/TravelModule')

exports.GetAllTravel = asyncHandler (async (req, res) => {

    try {
        const travel = await TravelModule.find().populate("CreatedBy");
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

    const { from, to, departure_time, departure_date, arrival_time, arrival_date, price, CreatedBy } = req.body

    if (!from || !to || !departure_time || !departure_date || !arrival_time || !arrival_date || !price || !CreatedBy) {
        res.status(401).json({ status: 'please add all fields' })
    }

    const Travel = await TravelModule.create ({
        from,
        to,
        departure_time,
        departure_date,
        arrival_time,
        arrival_date,
        price,
        CreatedBy
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

    const DeletedTravel = await TravelModule.findByIdAndUpdate(req.params.id, { $set: { isDeleted: true }})

    res.status(200).status({ status: 'success'})
})

// exports.TarvelRetrieval = asyncHandler(async (req, res) => {

//     const travel = await TravelModule.findById(req.params.id)

//     if (!travel) {
//         res.status(400)
//         throw new Error('travel not found')
//     }

//     const Retrieval = await TravelModule.findByIdAndUpdate(req.params.id, { $set: { isDeleted: false } })

//     res.status(200).status({ status: 'success' })

// })