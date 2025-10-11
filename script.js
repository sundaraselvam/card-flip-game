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
            else {
                i--;
            }
        }
    }
    allCards.push(...ogCards, ...duCards);
    for(let j = 1; j <= 16; j++){
        const imageElement = document.getElementById(j);
        imageElement.src = `assets/${allCards[j-1]}.png`;
    }
};
const handleClick = (id) => {
    // 1. Got to create a variable that will check the previous card clicked
    // 2. if the current card clicked matches the previous card clicked, then we leave both cards face up
    // 3. if the current card clicked does not match the previous card clicked, then we flip both cards back over
    // 4. We also need to make sure that if a card is already face up, we do not do anything when it is clicked again
    return id;
}