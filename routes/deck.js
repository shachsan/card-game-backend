const express = require('express');
const deckCollection = require('../models/deckCollection')
const router = express.Router();

const deckCol = new deckCollection();

router.get('/new', (req, res, next)=>{
    res.status(200).json(deckCol.createNewDeck());
})

router.get('/:id/draw', (req, res, next)=>{
    res.status(200).json(deckCol.drawCard(req.params.id));
})

router.get('', (req, res, next)=>{
    res.status(200).json(deckCol.getDecks())
})

module.exports = router;