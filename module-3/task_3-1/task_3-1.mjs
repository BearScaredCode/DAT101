"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime <= 7) {
  printOut("If I wake up exactly at " + wakeUpTime + " o'clock then I can take the bus to school.");
}
else if(wakeUpTime === 8) {
  printOut("If I wake up exactly at " + wakeUpTime + " o'clock then I can take the train to school.");
  
}
else printOut("If I wake up exactly at " + wakeUpTime + " o'clock then I need to take the car to school.");

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let integer = -1;

if (integer >0) {
  printOut("positive.");
}
else if (integer === 0) {
  printOut("zero.");
}
else printOut("negative.");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const MPrandom1 = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + MPrandom1 + " MB");
if (MPrandom1 >= 4) {
  printOut("Thank you");
}
else printOut ("The image is too small");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const MPrandom2 = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + MPrandom2 + " MB ");
if (MPrandom2 >= 4 && MPrandom2 < 6) {
  printOut("Thank you");
}
else if (MPrandom2 >= 6) {
  printOut ("The image is too big");
}
else printOut ("The image is too small");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {printOut ("It is "  + monthName + " You must take vitamin D")}
else {printOut ("It is " + monthName + " You don't need vitamin D")};

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const January = 31;
const February = 28;
const Mars = 31;
const April = 30;
const Mai = 31;
const Jun = 30;
const Juli = 31;
const August = 31;
const September = 30;
const October = 31;
const November = 30;
const December = 31;

if (monthName === "January") {printOut ("It is " + monthName + " and has " + January + " days")}
else if (monthName === "February") {printOut ("It is " + monthName + " and has " + February + " days")}
else if (monthName === "Mars") {printOut ("It is " + monthName + " and has " + Mars + " days")}
else if (monthName === "April") {printOut ("It is " + monthName + " and has " + April + " days")}
else if (monthName === "Mai") {printOut ("It is " + monthName + " and has " + Mai + " days")}
else if (monthName === "Jun") {printOut ("It is " + monthName + " and has " + Jun + " days")}
else if (monthName === "Juli") {printOut ("It is " + monthName + " and has " + Juli + " days")} 
else if (monthName === "August") {printOut ("It is " + monthName + " and has " + August + " days")}
else if (monthName === "September") {printOut ("It is " + monthName + " and has " + September + " days")}
else if (monthName === "October") {printOut ("It is " + monthName + " and has " + October + " days")}
else if (monthName === "November") {printOut ("It is " + monthName + " and has " + November + " days")}
else {printOut ("It is " + monthName + " and has " + December + " days")}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "March" || monthName === "May" ) {printOut("It is " + monthName + " and the gallery is closed")}
else if (monthName === "April") {printOut("It is " + monthName + " and the gallery is closed, but the exhibition next door is open")}
else {printOut("It is " + monthName + " and the gallery is open")};

printOut(newLine);
