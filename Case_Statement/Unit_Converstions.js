const promt=require('prompt-sync')();
const number = promt('Enter unit')

const choice = promt('Enter your choise \n 1.Feet to Inch 2. Feet to meter 3. inches to foot 4. meter to foot')

switch(choice) {
    case "1": console.log("Given  feet " +number+ "in inches :"+number*12);
    break;
    case "2": console.log("Given  feet " +number+ "in meter :"+number*0.3048);
    break;
    case "3": console.log("Given  inches" +number+ "in foot :"+number*0.0833);
    break;
    case "4": console.log("Given meter  " +number+ "in foot :"+number*3.28);
    break;
}