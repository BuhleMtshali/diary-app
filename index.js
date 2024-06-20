let feelingsElement = document.querySelector("#feelings-input");
let listContainer = document.querySelector("#list-container");

let feelingsArray = [];

function addFeelings(event) {
  event.preventDefault();
  feelingsArray.push(feelingsElement.value);
  feelingsElement.value = "";
  renderFeelings();
}

function renderFeelings() {
  let feelingsList = "";
  for (let i = 0; i < feelingsArray.length; i++) {
    feelingsList += `<li data-id="${i}">${feelingsArray[i]}</li>`;
  }
  listContainer.innerHTML = feelingsList;

  document.querySelectorAll("#list-container li").forEach((item) => {
    item.addEventListener("dblclick", (event) => {
      let id = event.target.getAttribute("data-id");
      let warning = confirm("Do you want to delete this entry?");
      if (warning) {
        deleteNote(id);
      }
    });
  });
}
function deleteNote(id) {
  feelingsArray.splice(id, 1);
  renderFeelings();
}

function clearAll() {
  feelingsArray = [];
  renderFeelings();
}

let clearAllButton = document.querySelector("#clear-feelings");
clearAllButton.addEventListener("click", clearAll);
let addFeelingsButton = document.querySelector("#add-btn");
addFeelingsButton.addEventListener("click", addFeelings);
