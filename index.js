let feelingsElement = document.querySelector("#feelings-input");
let listContainer = document.querySelector("#list-container");
let feelingsArray = [];

function addFeelings(event) {
  event.preventDefault();
  feelingsArray.push(feelingsElement.value);
  feelingsElement.value = "";
}

let addFeelingsButton = document.querySelector("#add-btn");
addFeelingsButton.addEventListener("click", addFeelings);
