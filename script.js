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




