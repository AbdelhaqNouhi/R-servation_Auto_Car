const express = require ('express');
const router = express.Router();
const Users = require ('../modules/Users')

router.get('/', async (req, res) => {
    try {
        const data = await Users.find();
        res.json(data)
    }
    catch (err) {
        res.json({msg: err})
    }
});

router.post('/', async (req, res) => {
    const users = new Users ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    });

    try {
        const data = await users.save()
        res.json(data);
    }
    catch(err) {
        res.json({msg: err});
    }
        
});

module.exports = router;