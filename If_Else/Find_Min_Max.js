let threedigitsrandomOne = Math.floor(100 + Math.random() * 900);
let threedigitsrandomTwo = Math.floor(100 + Math.random() * 900);
let threedigitsrandomThree = Math.floor(100 + Math.random() * 900);

function maxNumber(numberOne,numberTwo, numberThree) {
    if(numberOne > numberTwo && numberOne > numberThree)
    {
        console.log("Max number : "+numberOne);
    } 
    else if(numberTwo > numberOne && numberTwo > numberThree)
    {
        console.log("Max number : "+numberTwo);
    }
    else{
        console.log("Max number : "+numberThree);
    }
}

function minNumber(numberOne,numberTwo, numberThree) {
    if(numberOne < numberTwo && numberOne < numberThree)
    {
        console.log("Max number : "+numberOne);
    } 
    else if(numberTwo < numberOne && numberTwo < numberThree)
    {
        console.log("Max number : "+numberTwo);
    }
    else{
        console.log("Max number : "+numberThree);
    }
}

maxNumber(threedigitsrandomOne,threedigitsrandomTwo,threedigitsrandomThree);
minNumber(threedigitsrandomOne,threedigitsrandomTwo,threedigitsrandomThree);