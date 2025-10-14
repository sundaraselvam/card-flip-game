function loading(){
    cards = [{id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}, {id:1, img: "assets/1.png"}, {id:2, img: "assets/2.png"}];
    console.log(shuffle(cards));
}
function shuffle(cards){
    let currentIndex = cards.length;
    let temp;
    let randomIndex;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex); // 1, 2, 2
        currentIndex--; // 3, 2, 1, 0
        temp = cards[currentIndex]; // 3, 2 , 1
        cards[currentIndex] = cards[randomIndex]; // 1, 2, 1
        cards[randomIndex] = temp; // 3, 2 , 1
    }
    return cards;
}

// card []
// back
// front
// position absolute/relative