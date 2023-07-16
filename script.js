//create divs
// container = document.getElementById("container");


//default function for 16x16 grid
    for (let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.style.backgroundColor = 'black';
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
    container.appendChild(div);
    }
 

//run user choice function when generate button is clicked
document.querySelector("#generate-button").addEventListener("click", generateGrid)

function generateGrid(){
   clearGrid()
    const userChoice = prompt("Please enter a grid size less than or equal to 100:");
    if (userChoice === undefined || userChoice === null || userChoice === "" || userChoice > 100){
        alert ("Please select a number less than 100.")
        return
    }
    for (i = 0; i < userChoice; i++){
        const div = document.createElement("div");
        div.style.backgroundColor = 'red';
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
        container.appendChild(div).className = "newDiv";

      }}

      //Trying to clear the original function
      function clearGrid(){
        let container = document.querySelectorAll("containers");
        container.forEach(container => {container.style.backgroundColor = null});
    }





