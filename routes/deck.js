const express = require('express');
const deck = require('../models/deckModel')
const router = express.Router();

const newDeck = new deck();


router.get('/new', (req, res, next)=>{
    console.log('reached route /api/deck/new');
    res.status(200).json(newDeck.newDeck());
})

router.get('/:id/draw', (req, res, next)=>{
    res.status(200).json(drawCards);
})

module.exports = router;