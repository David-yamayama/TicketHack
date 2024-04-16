var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

router.post('/cart', (req, res) => {

    const newCart = new Cart({
        id: req.body.id
    })
    newCart.save().then(saved => {
        res.json({ result: true, trip: saved })
    })
})

router.get('/cart', (req, res) => {
    Cart.find()
        .populate('trips')
        .then(carts => {
            res.json({ result: true, carts })
        })

});


module.exports = router;
