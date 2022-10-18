const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const AdminModule = require('../modules/AdminModule')
const { admin } = require('../router/AdminRouter')


exports.RegisterAdmin = asyncHandler(async (req, res) => {

    const { full_name, email, password } = req.body

    //  check if all fields exists
    if (!full_name || !email || !password) {
        res.status(401)
        throw new Error("please add all fields")
    }

    // check if user exists
    const AdminExists = await AdminModule.findOne({ email })

    if (AdminExists) {
        res.status(401).json({ status: "Admin already exists" })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(password, salt)

    // create User
    const admin = await AdminModule.create({
        full_name,
        email,
        password: HashPassword,
    })

    if (admin) {
        res.status(201).json({
            _id: admin.id,
            full_name: admin.full_name,
            email: admin.email,
            password: admin.password,
            token: GenerateToken(admin._id)

        })
    }
    else {
        res.status(400).json({ status: 'invalide admin data' })
    }
})

exports.LoginAdmin = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    // check for user email
    const admin = await AdminModule.findOne({ email })

    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            full_name: admin.full_name,
            email: admin.email,
            token: GenerateToken(admin._id)
        })
    }
    else {
        res.status(401).json({ status: 'invalide password or email' })
    }
})

// Generate JWt
const GenerateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}