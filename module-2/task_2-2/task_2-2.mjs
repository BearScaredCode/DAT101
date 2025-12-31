"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const result1 = 2 + 3 * 2 - 4 * 6;
const result2 = 2 + 3 * (2 - 4) * 6;
printOut("The answer to the orginal expression is: " + result1);
printOut(newLine);
printOut("The answer to the edited expression is: " + result2);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 25;
const centimeters = 34;
const mm2inc = 25.4;
const result3 = (meters * 1000 + centimeters * 10) / mm2inc;

printOut("25 meters and 34 centimeters converted to inches is: " + result3.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;
const totalMinutes = days * 24 * 60 + hours * 60 + minutes + seconds / 60;
printOut("The total time in minutes is: " + totalMinutes.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutes2 = 6322.52;
let part4rest = totalMinutes2 / (24 * 60);
const days2 = Math.floor(part4rest);
part4rest = part4rest - days2;
part4rest = part4rest * 24;
const hours2 = Math.floor(part4rest);
part4rest = part4rest - hours2;
part4rest = part4rest * 60;
const minutes2 = Math.floor(part4rest);
part4rest = part4rest - minutes2;
part4rest = part4rest * 60;
const seconds2 = Math.floor(part4rest);

printOut(totalMinutes2 + " minutes is: " + days2 + " days " + hours2 + " hours " + minutes2 + " minutes " + seconds2 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollars = 54;
const exchangeRate = 76 / 8.6;
const result5 = dollars * exchangeRate;
printOut(dollars + " dollars is: " + result5.toFixed(0) + " NOK");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const quote = "There is much between heaven and earth we do not understand";
const charToFind = quote.length;
const charIndesx = 19
const specificChar = quote [charIndesx];
const startIndex = 34;
const length = 8;
const substring = quote.slice(startIndex, startIndex + length);
const earthIndex = quote.indexOf("earth");


printOut("The length of the quote is: " + charToFind + "," + 
    " The 20th character in the quote is: " + specificChar + "," +
    " 8 characters from the 35th character: " + substring + "," +
    ' "earth" starts at index: ' + earthIndex);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);