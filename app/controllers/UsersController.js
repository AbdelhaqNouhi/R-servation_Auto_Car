const UsersModule = require('../modules/UsersModule')

exports.GetAllUsers = async (req, res, next) => {

    try {
        const users = await UsersModule.find();
        res.status(200).json(users)

    } catch (err) {
        res.status(400).json({status: "fail"})
    }
}

exports.GetOneUser = async (req, res, next) => {

    try {
        const user = await UsersModule.findById(req.params.id);
        res.status(200).json(user)

    } catch (err) {
        res.status(400).json({ status: "fail" })
    }
}

exports.AddUser = async (req, res, next) => {

    try {
        const user = await UsersModule.create(req.body);
        res.status(200).json(user)

    } catch (err) {
        res.status(400).json({ status: "fail" })
    }
}