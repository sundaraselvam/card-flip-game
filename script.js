function loading(){
    cards = [{id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}, {id:1, img: "assets/1.png"}, {id:1, img: "assets/1.png"},{id:1, img: "assets/1.png"},{id:1, img: "assets/1.png"},{id:1, img: "assets/1.png"},{id:1, img: "assets/1.png"} {id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}];
    console.log(shuffle(cards));
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

// card []
// back
// front
// position absolute/relative