// Write your code here!
"use strict";

const testVar = "hi";
const name = "Kevin";

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = `${name} is the champion!`;
newHeader.className = "victory";
