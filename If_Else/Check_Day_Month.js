const prompt = require('prompt-sync')();

const day = prompt('Enter Day');

const month = prompt('Enter Month');

if (month == 3 && day < 31 && day >= 20) {
    console.log("True")

}

else if (month >= 4 && month <= 6) {
    if (month < 6 && day > 0 && day < 31) {
        console.log("True");
    }
    if (month == 6 && day <= 20) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}

else {
    console.log("False");
}

