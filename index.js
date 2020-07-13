// Code your solutions in this file



function writeCards(names, event) {
    let allCards = []
    for (let i = 0; i < names.length; i++) {
        allCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return allCards
}

function countDown(startingNum) {
    let i = startingNum;
    while (i >= 0) {
        console.log(i);
        i--
    }
}

