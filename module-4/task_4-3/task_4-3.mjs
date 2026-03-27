"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
const txtTask1Output = document.getElementById("txtTask1Output");

function cmbTask1CalculateClick(){
  const width = Number(txtRectWidth.value);
  const height = Number(txtRectHeight.value);
  const circumference = 2 * (width + height);
  const area = width * height;

  txtTask1Output.textContent = "Circumference = " + circumference + ", Area = " + area;
}

cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");
const task2Words = [];

function txtTask2WordKeyPress(event){
  if(event.key !== "Enter"){
    return;
  }

  const word = txtTask2Word.value.trim();
  if(word.length > 0){
    task2Words.push(word);
  }

  txtTask2Output.textContent = "Number of words = " + task2Words.length + ": " + task2Words.join(", ");
  txtTask2Word.value = "";
}

txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

function cmbTask3CheckAnswerClick(){
  const checkboxes = document.querySelectorAll("input[name='chkTask3']");
  const selected = [];

  for(let i = 0; i < checkboxes.length; i++){
    const checkbox = checkboxes[i];
    if(checkbox.checked){
      selected.push(checkbox.value);
    }
  }

  if(selected.length === 0){
    txtTask3Output.textContent = "No checkboxes selected.";
    return;
  }

  txtTask3Output.textContent = "Selected checkboxes: " + selected.join(", ");
}

cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for(let i = 0; i < CarTypes.length; i++){
  const car = CarTypes[i];
  const label = document.createElement("label");
  const radio = document.createElement("input");

  radio.type = "radio";
  radio.name = "radioTask4Cars";
  radio.value = car.value;
  radio.dataset.caption = car.caption;

  radio.addEventListener("change", function(){
    if(radio.checked){
      txtTask4Output.textContent = "Selected car: " + radio.dataset.caption;
    }
  });

  label.appendChild(radio);
  label.appendChild(document.createTextNode(" " + car.caption));
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function selectTask5AnimalsChange(){
  const selectedText = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;
  txtTask5Output.textContent = "You selected: " + selectedText;
}

selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
selectTask5AnimalsChange();

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for(let i = 0; i < GirlsNames.length; i++){
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

function selectTask6GirlsChange(){
  txtTask6Output.textContent = "You selected: " + selectTask6Girls.value;
}

selectTask6Girls.addEventListener("change", selectTask6GirlsChange);
selectTask6GirlsChange();

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

for(let i = 0; i < MovieGenre.length; i++){
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.textContent = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}

function cmbAddMovieClick(){
  const title = txtMovieTitle.value.trim();
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value.trim();
  const rate = Number(txtMovieRate.value);

  const row = document.createElement("tr");
  const nrCell = document.createElement("td");
  const titleCell = document.createElement("td");
  const genreCell = document.createElement("td");
  const directorCell = document.createElement("td");
  const rateCell = document.createElement("td");

  nrCell.textContent = String(tblMovies.rows.length);
  titleCell.textContent = title;
  genreCell.textContent = genre;
  directorCell.textContent = director;
  rateCell.textContent = String(rate);

  row.appendChild(nrCell);
  row.appendChild(titleCell);
  row.appendChild(genreCell);
  row.appendChild(directorCell);
  row.appendChild(rateCell);
  tblMovies.appendChild(row);

  txtMovieTitle.value = "";
  txtMovieDirector.value = "";
  txtMovieRate.value = "5";
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);
