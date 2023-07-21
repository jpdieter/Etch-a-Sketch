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
    divs.forEach((div) => div.style.backgroundColor = "#00FF41")
}

function userSelection(){
    let userChoice = prompt("Please enter a grid size less than or equal to 100:");
    if (userChoice <= undefined || userChoice === null || userChoice === "" || userChoice > 100){
        alert ("Please select a number less than 100.")
        return
    }
   generateGrid(userChoice);
}

