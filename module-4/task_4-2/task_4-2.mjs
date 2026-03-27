"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut("Lengde = " + part1Array.length + ", Verdi = " + part1Array [part1Array.length - 1]);

let Part1Text = "";
for (let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array [i]; // -> Every indes of part1Array
    if (i === part1Array. length - 1) {
        Part1Text += value.toString() + ".";
    } else {
        Part1Text += value.toString() + ", ";
    }
}
printOut(Part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2Text = part1Array.join(", ");
printOut(part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Greeting = "Hei på deg, hvordan har du det?";
const greetingArray = part3Greeting.split(" ");
for (let i= 0; i < greetingArray.length; i++) {
    const word = greetingArray [i];
    const wordNumber = i + 1;
    printOut("Word #" + wordNumber + " | index " + i + " | " + word);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function removeNameFromArray(aArray, aName){
    let deleteIndex = -1;

    for(let i = 0; i < aArray.length; i++){
        const name = aArray[i];
        if(name === aName){
            deleteIndex = i;
            break;
        }
    }

    if(deleteIndex >= 0){
        aArray.splice(deleteIndex, 1);
        printOut(aName + " exists and was removed.");
    } else{
        printOut(aName + " does not exist in the array.");
    }
}
removeNameFromArray(girls, "Hilde");
removeNameFromArray(girls, "Siri");
printOut(girls.join(", "));


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak",
"Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allNames = [];
allNames.push(...girls, ...boys);

printOut("Girl names: " + girls.length);
printOut("Boy names: " + boys.length);
printOut("All names merged: " + allNames.length);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString(){
        return "Title: " + this.title + " | Author: " + this.author + " | ISBN: " + this.isbn;
    }
}

const books = [
    new TBook("Sult", "Knut Hamsun", "9788205309940"),
    new TBook("Markens Grøde", "Knut Hamsun", "9788205309537"),
    new TBook("Naiv. Super.", "Erlend Loe", "9788203361711"),
];

for(let i = 0; i < books.length; i++){
    printOut(books[i].toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TCalendar {
    static EWeekDays = {
        Monday: { number: 1, name: "Mandag" },
        Tuesday: { number: 2, name: "Tirsdag" },
        Wednesday: { number: 3, name: "Onsdag" },
        Thursday: { number: 4, name: "Torsdag" },
        Friday: { number: 5, name: "Fredag" },
        Saturday: { number: 6, name: "Lørdag" },
        Sunday: { number: 7, name: "Søndag" },
    };
}

const weekDayKeys = Object.keys(TCalendar.EWeekDays);
for(let i = 0; i < weekDayKeys.length; i++){
    const key = weekDayKeys[i];
    const day = TCalendar.EWeekDays[key];
    printOut(key + ": " + day.number + " - " + day.name);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = [];
for(let i = 0; i < 35; i++){
    randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

const ascNumbers = [...randomNumbers].sort((a, b) => a - b);
const descNumbers = [...randomNumbers].sort((a, b) => b - a);

printOut("Original: " + randomNumbers.join(", "));
printOut("Ascending: " + ascNumbers.join(", "));
printOut("Descending: " + descNumbers.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numberFrequency = {};
for(let i = 0; i < randomNumbers.length; i++){
    const value = randomNumbers[i];
    if(numberFrequency[value] === undefined){
        numberFrequency[value] = 0;
    }
    numberFrequency[value]++;
}

const numberFirst = Object.keys(numberFrequency)
    .map((key) => Number(key))
    .sort((a, b) => a - b);

printOut("Number -> Frequency:");
for(let i = 0; i < numberFirst.length; i++){
    const value = numberFirst[i];
    printOut(value + " -> " + numberFrequency[value]);
}

const frequencyFirst = numberFirst
    .map((value) => ({ value: value, count: numberFrequency[value] }))
    .sort((a, b) => {
        if(b.count !== a.count){
            return b.count - a.count;
        }
        return a.value - b.value;
    });

printOut("Frequency -> Numbers (most frequent first):");
for(let i = 0; i < frequencyFirst.length; i++){
    const item = frequencyFirst[i];
    printOut(item.count + " -> " + item.value);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rows = 5;
const cols = 9;
const grid = [];

for(let row = 0; row < rows; row++){
    const currentRow = [];
    for(let col = 0; col < cols; col++){
        currentRow.push("R" + row + "C" + col);
    }
    grid.push(currentRow);
}

for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
        printOut("Cell[" + row + "][" + col + "] = " + grid[row][col]);
    }
}

printOut("2D array as rows:");
for(let row = 0; row < grid.length; row++){
    printOut(grid[row].join(" | "));
}
printOut(newLine);
