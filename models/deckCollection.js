class DeckCollection{
    constructor(){
        this.decks=[];
        this.maxDeck=5;
    }

    createNewDeck(){
        console.log('=====new deck created===');
        if(this.decks.length===this.maxDeck){
            return {message:`You can only have ${this.maxDeck} decks at a time`}
        } else{
            const deck={id:this.decks.length+1}
            const cards=[];

            const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
            const suits = ['spades', 'club', 'heart', 'diamond']

            for(let v=0;v<values.length;v++){
                for(let s=0;s<suits.length;s++){
                    cards.push({value:values[v], suit:suits[s]});
                }
            }
            deck.cards = cards;
            deck.remaining=cards.length;
            this.decks.push(deck);

        return deck;
        }

    }

    drawCard(id){
        console.log('id===>', id);
        console.log('decks===>', this.decks);
        const deck = this.decks.find(deck=>deck.id==id);
        if(deck){
            let drawnCards = deck.cards.splice(0,5);
            deck.remaining=deck.cards.length;
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