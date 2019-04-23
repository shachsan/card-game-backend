const express = require('express');
const deckCollection = require('../models/deckCollection')
const router = express.Router();

const deckCol = new deckCollection();
console.log('new deck', deckCol.createNewDeck());

router.get('/new', (req, res, next)=>{
    console.log('reached route /api/deck/new');
    res.status(200).json(deckCol.createNewDeck());
})

router.get('/:id/draw', (req, res, next)=>{
    res.status(200).json(deckCol.drawCard(req.params.id));
})

router.get('', (req, res, next)=>{
    res.status(200).json(deckCol.getDecks())
})

module.exports = router;