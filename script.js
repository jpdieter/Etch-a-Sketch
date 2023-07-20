//create divs
const container = document.getElementById("container");

makeRows(16, 16); 

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "black";
        } )
        container.appendChild(cell).className = "grid-item";    
        
        }
             

    }

//default function for 16x16 grid
 //   for (let i = 0; i < 16; i++){
   // const div = document.createElement("div");
   // div.style.backgroundColor = 'black';
   // div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
   // container.appendChild(div).className = "grid-item";
   // }
 

//run user choice function when generate button is clicked
document.querySelector("#generate-button").addEventListener("click", generateGrid)

function generateGrid(){
    const userChoice = prompt("Please enter a grid size less than or equal to 100:");
    if (userChoice === undefined || userChoice === null || userChoice === "" || userChoice > 100){
        alert ("Please select a number less than 100.")
        return
    }
    //makeRows() should be called instead of this code
    for (i = 0; i < userChoice; i++){
        const div = document.createElement("div");
        div.style.backgroundColor = 'red';
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
        container.appendChild(div).className = "newDiv";

      }}


      //Trying to clear the original function
      let clear = document.getElementById("clearBtn");
      clear.onclick = function clearGrid(){
       var elements = document.getElementsByClassName("grid-item");
          for (var i = 0; i < elements.length; i++) {
  
            elements[i].style.backgroundColor = null;
  
        }
      }
  







