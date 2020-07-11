// Code your solutions in this file
function writeCards(names, event) {
    let arr = [];
    for (let i = 0; i < names.length; i++)
    {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(num) {
    let count = 0
    while (count < num+1) {
        console.log(num--)
    }
}
