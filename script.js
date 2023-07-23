document.querySelector("#generate-button").addEventListener("click", userSelection)

generateGrid(16);

function generateGrid(size){
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
        container.insertAdjacentElement("beforeend", div);
    }
}

reset = document.getElementById("reset-button");
reset.onclick = function resetGrid(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "")
}

colors = ['red', 'blue', 'purple', 'yellow', 'cyan', 'orange', '#4CAF50'];
randomize = document.getElementById("canvas-button");
randomize.onclick = function randomColor(){
    let divs = document.getElementsByClassName("container")
    let i = divs;
    for (i = 0; i < divs.length; i++){
        let randomColor = Math.floor(Math.random()*colors.length)
        divs[i].style.backgroundColor = colors[randomColor];
    }
}

function userSelection(){
    let userChoice = prompt("Please enter a grid size less than or equal to 100:");
    if (userChoice <= undefined || userChoice === null || userChoice === "" || userChoice > 100){
        alert ("Please select a number less than 100.")
        return
    }
   
    generateGrid(userChoice);
}

