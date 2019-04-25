const uniqid = require('uniqid');

class DeckCollection{
    constructor(){
        this.decks=[];
        this.maxDeck=5;
    }

    shuffleNewDeck(cards){
        let shuffledCards=[];
        while(cards.length){
            let randomCard=cards.splice(Math.floor(Math.random()*cards.length),1)[0]
            shuffledCards.push(randomCard);
        }
        return shuffledCards;
    }

    createNewDeck(){
        if(this.decks.length===this.maxDeck){
            return {message:`You can only have ${this.maxDeck} decks at a time`}
        } else{
            const deck={id:uniqid()}
            const cards=[];
            const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
            const suits = ['spades', 'club', 'heart', 'diamond']
            
            for(let v=0;v<values.length;v++){
                for(let s=0;s<suits.length;s++){
                    cards.push({value:values[v], suit:suits[s]});
                }
            }
            
            //shuffle cards here
            const shuffledCards= this.shuffleNewDeck(cards);
            
            console.log('=====new deck created===');
            deck.cards = shuffledCards;
            deck.remaining=shuffledCards.length;
            this.decks.push(deck);

        return deck;

        }

    }

  

    drawCard(id){
        const deck = this.decks.find(deck=>deck.id==id);
        if(deck){
            let drawnCards = deck.cards.splice(0,5);
            deck.remaining=deck.cards.length;
            if(deck.remaining===0){
                this.decks.splice(this.decks.findIndex(dk=>dk===deck),1) // remove the deck from the decks array
            }
            return {deckId:deck.id, cards:drawnCards, remaining:deck.remaining};
        }else{
            return {message:'deck does not exist'}
        }
    }

    getDecks(){
        return this.decks;
    }
}

module.exports = DeckCollection;