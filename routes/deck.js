const express = require('express');
const router = express.Router();

const deck = {
    id:1,
    cards:[
        {id:1,code:'AS'},
        {id:2,code:'AH'},
        {id:3,code:'AC'},
        {id:4,code:'AD'},
        {id:5,code:'2S'},
        {id:6,code:'2H'},
        {id:7,code:'2C'},
        {id:8,code:'2D'},
    ],
    remaining:52
}

router.get('/new', (req, res, next)=>{
    console.log('reached route /api/deck/new');
    res.status(200).json(deck);
})

module.exports = router;