"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPartLine1 = "";
let textPartLine2 = "";

for (let i = 1, j = 10; i <= 10; i++, j--) {
  textPartLine1 += i + " ";
  textPartLine2 += j + " ";
}
printOut(textPartLine1);
printOut(textPartLine2);


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1GuessNumber = 45;
let part1Random = Math.floor(Math.random() * 60) + 1;
while(part1Random !== part1GuessNumber) {
part1Random = Math.floor(Math.random() * 60) + 1;
};



printOut("Yes! you guessed correct: " + part1Random);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Time = Date.now();
printOut(part3Time);
const part3GuessNumber = 654321;
let part3Random;
let part3Count = 0;
do{
part3Random = Math.floor(Math.random() * 1000000) + 1;
part3Count++;
}while(part3Random !== part3GuessNumber);


printOut("Number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time;
printOut("Number of milliseconds: " + part3DeltaTime);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Intrager =1;
if (Intrager > 0) { 
  printOut("The number is positive");
}
else if (Intrager < 0) {
  printOut("The number is negative");
}
else {
  printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (Intrager > 0) { 
  printOut("The number is positive");
}
else if (Intrager < 0) {
  printOut("The number is negative");
}
else {
  printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const RandomNumber = Math.floor(Math.random() * 8) + 1;
if (RandomNumber <= 4 ) {printOut ("Thank you");}
else {printOut ("Image is too small");}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const RandomNumber2 = Math.floor(Math.random() * 8) + 1;
if (RandomNumber2 >= 6 ) {printOut ("Image too large");}
else if (RandomNumber2 >= 4) {printOut ("Thank you");}
else {printOut ("Image is too small");}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.toLowerCase().includes("r")) {
  printOut("You need to take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
const daysIn31Months = ["January", "Mars", "Mai", "Juli", "August", "October", "December"];
const daysIn30Months = ["April", "Jun", "September", "November"];
if (daysIn31Months.includes(monthName2)) {
  printOut(monthName2 + " has 31 days");
} else if (daysIn30Months.includes(monthName2)) {
  printOut(monthName2 + " has 30 days");
} else {
  printOut(monthName2 + " has 28 days");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList3 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth3 = monthList3.length;
const monthName3 = monthList3[Math.floor(Math.random() * noOfMonth3)];

const cloesdMonths = ["Mai", "Mars"];
const semiClosedMonths = ["April"];
if (cloesdMonths.includes(monthName3)) {
  printOut(monthName3 + " is closed");
} else if (semiClosedMonths.includes(monthName3)) {
  printOut(monthName3 + " temporary premises open in the building next door.");
} else {
  printOut(monthName3 + " is open");
}
printOut(newLine);
