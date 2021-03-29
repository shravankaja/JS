const prompt = require('prompt-sync')();

const n1 = prompt('Enter number One');

const n2 = prompt('Enter number Two');

const n3 = prompt('Enter number Three');

let op1 = n1+n2*n3;
let op2 = n1%n2+n3;
let op3 = n3+n1/n2;
let op4 = n1*n2+n3;

if(op1 > op2 && op1 > op3 && op1 > op4) {
    console.log("Max is 1st operation : "+op1);
}
else if(op2 > op1 && op2 > op3 && op2 > op4) {
    console.log("Max is 2nd operation : "+op2);
}
else if(op3 > op2 && op3 > op1 && op3 > op4) {
    console.log("Max is 3rd  operation : "+op3);
}
else {
    console.log("Max is 4th operation : "+op4);
}

if(op1 < op2 && op1 < op3 && op1 < op4) {
    console.log("Min is 1st operation : "+op1);
}
else if(op2 < op1 && op2 < op3 && op2 < op4) {
    console.log("Min is 2nd operation : "+op2);
}
else if(op3 < op2 && op3 < op1 && op3 < op4) {
    console.log("Min is 3rd  operation : "+op3);
}
else {
    console.log("Min is 4th operation : "+op4);
}

