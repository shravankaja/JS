let randomNumber = Math.round(Math.random());

let headCount=0;
let tailCount=0;

while(true) {
    if(randomNumber == 0) {
        headCount=headCount+1;
    }
    else {
        tailCount = tailCount+1;
    }

    if(tailCount==11) {
        console.log("tail wins first count : "+tailCount);
        break;
    }
    else if(headCount==11) {
        console.log("head wins  count : "+headCount);
        break;
    }
}