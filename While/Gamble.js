
let money = 0;
let randomNumber;
while (true) {
    randomNumber = Math.round(Math.random());
    if (randomNumber = 1) {
        console.log("Won bet");
        console.log(randomNumber)
        money = money + 1;
        if (money == 200) {
            break;
        }
    }
    else {
        console.log("lost bet");
        console.log(randomNumber)
        money = money - 1;
        if (money == 0) {
            break;
        }
    }
}
console.log(money);

