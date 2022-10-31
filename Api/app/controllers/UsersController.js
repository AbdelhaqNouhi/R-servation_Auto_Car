const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const UsersModule = require('../modules/UsersModule')


exports.GetAllUsers = asyncHandler (async (req, res) => {

    try {
        const users = await UsersModule.find();
        res.status(201).json(users)

    } catch (err) {
        res.status(401).json({status: "fail"})
    }
})

exports.RegisterUser = asyncHandler (async (req, res) => {

    const {full_name, email, phone, password} = req.body

    //  check if all fields exists
    if (!full_name || !email || !phone || !password) {
        res.status(401)
        throw new Error("please add all fields")
    }

    // check if user exists
    const UserExists = await UsersModule.findOne({email})

    if (UserExists) {
        res.status(401).json({ status: "user already exists" })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(password, salt)

    // create User
    const user = await UsersModule.create({
        full_name,
        email,
        phone,
        password : HashPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            token: GenerateToken(user._id)
            
        })
    } 
    else {
            res.status(400).json({ status: "invalide user data" })
    }
})

exports.LoginUser = asyncHandler (async (req, res) => {
    
    const { email, password} = req.body
    
    // check for user email
    const user = await UsersModule.findOne({ email })
    

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            token: GenerateToken(user._id)
        })
    }
    else {
        res.status(401).json({ status: 'invalide password or email'})
    }  
})


exports.GetToken = asyncHandler(async (req, res) => {
    res.json({ msg: 'user data is here'})
})

// Generate JWt
const GenerateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}