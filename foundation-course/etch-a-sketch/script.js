const container = document.querySelector(".container");
const gridSizeLabel = document.querySelector("#grid-size-display");
const gridSizeInput = document.querySelector("#grid-size");

let defaultGridSize = 16;

gridSizeLabel.textContent = defaultGridSize;

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (target.className !== "container") {
    target.classList.add("highlight");
  }
});

// function displayGridSize(){
gridSizeLabel.textContent = gridSizeInput.value;
gridSizeInput.addEventListener("input", (event) => {
  defaultGridSize = event.target.value;
  gridSizeLabel.textContent = `${defaultGridSize} x ${defaultGridSize}`;
  console.log(defaultGridSize);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  generateGrid();
});
// }

function generateGrid() {
  let gridSize = defaultGridSize * defaultGridSize;
  for (let i = 1; i <= gridSize; i++) {
    const grid = document.createElement("div");
    let hw = 352 / defaultGridSize - 2;
    grid.classList.add("box");
    grid.style.height = `${hw}px`;
    grid.style.width = `${hw}px`;
    container.appendChild(grid);
  }
}

generateGrid();
