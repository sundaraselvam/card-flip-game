const cardAssignments = () => {
    const cards = [];
    const cardValues = Math.floor(Math.random() * 8 + 1);
    if(!cards.includes(cardValues)){
        cards.push(cardValues);
    }
    else{
        cardAssignments();
    }
};
