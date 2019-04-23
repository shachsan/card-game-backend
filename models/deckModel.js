class Deck{

    newDeck(){
        const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        const suits = ['spades', 'club', 'heart', 'diamond']
        const cards=[];

        for(let v=0;v<values.length;v++){
            for(let s=0;s<suits.length;s++){
                cards.push({value:values[v], suit:suits[s]});
            }
        }

        const deck = {
            id:1,
            cards:cards,
            remaining:cards.length
        }

        return deck;
    }
}

module.exports=Deck;
