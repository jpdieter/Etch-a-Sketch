//create divs
const container = document.getElementById("container");
//div.style.width = "10px";
//div.style.height = "10px";
//div.style.background = "red";
//div.style.color = "white";
//div.innerHTML = "Hello";
//Add 16 divs
for (let i = 0; i < 16; i++){
const div = document.createElement("div");
div.style.backgroundColor = 'red';
div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;"
container.appendChild(div);
}

document.querySelector("#generate-button").addEventListener("click", generate)

function generate(){
    let generateGrid = prompt("Enter the number of squares per side that you would like to see.");
    if (generateGrid > 100){
        alert ("Please select a number less than 100.")
      
    }
}


