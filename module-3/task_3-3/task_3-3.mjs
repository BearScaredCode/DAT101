"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate(){
	const today = new Date();
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	printOut(today.toLocaleDateString("no-NB", options));
}

printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodayDateWithPrint(){
	const today = new Date();
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	printOut("I dag er " + today.toLocaleDateString("no-NB", options));
	return today;
}

function daysUntil2XKO(today = new Date()){
	const releaseDate = new Date(2025, 4, 14); // months are 0-indexed
	const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	const msPerDay = 1000 * 60 * 60 * 24;
	const diffMs = releaseDate - startOfToday;
	return Math.ceil(diffMs / msPerDay);
}

function announce2XKOCountdown(){
	const today = getTodayDateWithPrint();
	const daysLeft = daysUntil2XKO(today);
	if(daysLeft > 0){
		printOut("Det er " + daysLeft + " dager igjen til 2XKO lanseres!");
	}
	else if(daysLeft === 0){
		printOut("2XKO lanseres i dag!");
	}
	else{
		const daysAgo = Math.abs(daysLeft);
		printOut("2XKO ble lansert for " + daysAgo + " dager siden.");
	}
}

announce2XKOCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const radius = 5;

function calculateCircle() {
    const area = Math.PI * radius * radius;
    const circomference = 2 * Math.PI * radius;
    const diameter = 2 * radius;
    printOut("Area: " + area);
    printOut("Circumference: " + circomference);
    printOut("Diameter: " + diameter);
}
calculateCircle();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const width = 10;
const height = 5;

function calculateRectangle () {
    const area = width * height;
    const perimeter = 2 * (width + height);
    printOut("Area: " + area);
    printOut("Perimeter: " + perimeter);
}
calculateRectangle();
printOut(newLine);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temp, type) {
    let celsius, fahrenheit, kelvin;
    
    if(type === "C") {
        celsius = temp;
        fahrenheit = Math.round(celsius * 9/5 + 32);
        kelvin = Math.round(celsius + 273.15);
        printOut(celsius + "C = " + fahrenheit + "F, " + kelvin + "K");
    }
    else if(type === "F") {
        fahrenheit = temp;
        celsius = Math.round((fahrenheit - 32) * 5/9);
        kelvin = Math.round((fahrenheit - 32) * 5/9 + 273.15);
        printOut(fahrenheit + "F = " + celsius + "C, " + kelvin + "K");
    }
    else if(type === "K") {
        kelvin = temp;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit = Math.round((kelvin - 273.15) * 9/5 + 32);
        printOut(kelvin + "K = " + celsius + "C, " + fahrenheit + "F");
    }
}

convertTemperature(25, "C");
convertTemperature(77, "F");
convertTemperature(300, "K");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(grossAmount, vatGroup){
    const group = vatGroup.toLowerCase();
    let vat;

    if(group === "normal"){
        vat = 25;
    }
    else if(group === "food"){
        vat = 15;
    }
    else if(group === "hotel" || group === "transport" || group === "cinema"){
        vat = 10;
    }
    else{
        printOut("Unknown VAT group!");
        return NaN;
    }

    const net = (100 * grossAmount) / (vat + 100);
    printOut(grossAmount + " with VAT group '" + vatGroup + "' => net: " + net.toFixed(2));
    return net;
}

calculateNetPrice(125, "normal");    // expected net: 100
calculateNetPrice(115, "FOOD");      // case-insensitive
calculateNetPrice(110, "Transport"); // expected net: 100
calculateNetPrice(99, "goblins");    // unknown group

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSDT(speed, distance, time){
    const speedMissing = speed === undefined || speed === null;
    const distanceMissing = distance === undefined || distance === null;
    const timeMissing = time === undefined || time === null;

    const missingCount = Number(speedMissing) + Number(distanceMissing) + Number(timeMissing);
    if(missingCount > 1){
        return NaN;
    }

    if(speedMissing){
        return distance / time;
    }

    if(timeMissing){
        return distance / speed;
    }

    if(distanceMissing){
        return speed * time;
    }

    return distance / time;
}

const speedInput = undefined;
const distanceInput = 100;
const timeInput = 2;
printOut("Calculated value (missing speed): " + calculateSDT(speedInput, distanceInput, timeInput));

const speedInput2 = 50;
const distanceInput2 = 100;
const timeInput2 = undefined;
printOut("Calculated value (missing time): " + calculateSDT(speedInput2, distanceInput2, timeInput2));

const speedInput3 = 50;
const distanceInput3 = undefined;
const timeInput3 = 2;
printOut("Calculated value (missing distance): " + calculateSDT(speedInput3, distanceInput3, timeInput3));

printOut("Calculated value (more than one missing): " + calculateSDT(undefined, undefined, 2));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function expandText(text, maxSize, character, insertAfter){
    let result = String(text);

    if(result.length >= maxSize){
        return result;
    }

    while(result.length < maxSize){
        if(insertAfter){
            result = result + character;
        }
        else{
            result = character + result;
        }
    }

    return result;
}

const expandedAfter = expandText("DAT", 8, " ", true);
const expandedBefore = expandText("DAT", 8, " ", false);

printOut("Insert after: " + expandedAfter);
printOut("Insert before: " + expandedBefore);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function sumConsecutive(start, count){
    let sum = 0;
    for(let i = 0; i < count; i++){
        sum += start + i;
    }
    return sum;
}

function testMathExpression(lines){
    for(let line = 1; line <= lines; line++){
        const leftStart = line * line;
        const leftCount = line + 1;
        const rightStart = leftStart + leftCount;
        const rightCount = line;

        const leftSum = sumConsecutive(leftStart, leftCount);
        const rightSum = sumConsecutive(rightStart, rightCount);

        if(leftSum !== rightSum){
            printOut("Line " + line + " failed: left=" + leftSum + ", right=" + rightSum);
            return;
        }
    }

    printOut("Maths fun!");
}

testMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number){
    if(number < 0){
        return NaN;
    }

    if(number === 0 || number === 1){
        return 1;
    }

    return number * factorial(number - 1);
}

const factorialInput = 6;
const factorialResult = factorial(factorialInput);
printOut("Factorial of " + factorialInput + " = " + factorialResult);
printOut(newLine);
