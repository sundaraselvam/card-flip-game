const cardAssignments = () => {
    const ogCards = [];
    const duCards = [];
    const allCards = [];
    for (let i = 1; i <= 16; i++) {
        const cardValues = Math.floor(Math.random() * 8 + 1);
        if (!ogCards.includes(cardValues)) {
            ogCards.push(cardValues);
        }
        else {
            if (!duCards.includes(cardValues)) {
                duCards.push(cardValues);
            }
        }
    }
    allCards.push(...ogCards, ...duCards);
    return allCards;
    
};
