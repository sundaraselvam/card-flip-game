let flipIndex = [];
let flippedCards = [];
let matchedCards = [];
let lockBoard = false;
function loading(){
    cards = [{id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}, {id:3, img: "assets/3.png"}, {id:4, img: "assets/4.png"},{id:5, img: "assets/5.png"},{id:6, img: "assets/6.png"},{id:7, img: "assets/7.png"},{id:8, img: "assets/8.png"} ,{id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}, {id:3, img: "assets/3.png"}, {id:4, img: "assets/4.png"},{id:5, img: "assets/5.png"},{id:6, img: "assets/6.png"},{id:7, img: "assets/7.png"},{id:8, img: "assets/8.png"}];
    assignableCards = shuffle(cards);
    assignCards(assignableCards);
}
function shuffle(cards){
    let currentIndex = cards.length;
    let temp;
    let randomIndex;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        temp = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
};
function assignCards(assignableCards){
    for (let i = 1; i <= 16; i ++){
        const imageElement = document.getElementById(i);
        imageElement.src = 'assets/cover.png';
        flipIndex[i-1] = assignableCards[i-1].img;
    }
};
function handleClick(id){
    const imageElement = document.getElementById(id);
    imageElement.classList.add("flip");
    imageElement.src = flipIndex[id-1];
};