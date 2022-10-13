const express = require ('express');
const router = express.Router();

const users = require ('../modules/users.m')

router.get('/', (req, res) => {
    res.send('are you a user !!')
});


module.exports = router;