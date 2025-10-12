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
    const currentCard = document.getElementById(id);
    currentCard.classList.add("flip");
    if(previousCard.src !== currentCard.src){
        if(previousCard.src === ""){
            previousCard = currentCard;
        }
        else{
            if(previousCard.src === currentCard.src){
                previousCard.classList.add("matched");
                currentCard.classList.add("matched");
            }
            else{
                setTimeout(() => {
                    previousCard.classList.remove("flip");
                    currentCard.classList.remove("flip");
                    previousCard = "";
                }, 1000);
            }
        }
    }
};
