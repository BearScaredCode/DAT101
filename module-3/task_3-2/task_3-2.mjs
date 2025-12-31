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
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
