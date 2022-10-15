const UsersModule = require('../modules/UsersModule')

exports.GetAllUsers = async (req, res) => {

    try {
        const users = await UsersModule.find();
        res.status(200).json(users)

    } catch (err) {
        res.status(400).json({status: "fail"})
    }
}

exports.GetOneUser = async (req, res) => {

    try {
        const user = await UsersModule.findById(req.params.id);
        res.status(200).json(user)

    } catch (err) {
        res.status(400).json({ status: "fail" })
    }
}

exports.AddUser = async (req, res) => {

    const user = new UsersModule ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.last_name,
        phone: req.body.phone,
        password: req.body.password
    });

    try {
        const data = await user.save();
        res.status(200).json(data)

    } catch (err) {
        res.status(400).json({ status: "fail" })
    }
}