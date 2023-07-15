//create divs
const container = document.getElementById("container");

defaultGrid();

//default function for 16x16 grid
function defaultGrid(){
    for (let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.style.backgroundColor = 'black';
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
    container.appendChild(div);
    }
    }

//run user choice function when generate button is clicked
document.querySelector("#generate-button").addEventListener("click", generateGrid)

function generateGrid(){
    const userChoice = prompt("Enter the number of squares per side that you would like to see.");
    if (userChoice > 100){
        alert ("Please select a number less than 100.")
    }
    for (i = 0; i < userChoice; i++){
        const div = document.createElement("div");
        div.style.backgroundColor = 'red';
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
        container.appendChild(div).className = "generatedDivs";
}}






