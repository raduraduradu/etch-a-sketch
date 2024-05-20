const DEFAULT_GRID_SIZE = 16;

let pixels = [];
const container = document.querySelector(".container");

function randomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getNewSize() {
  let size = Number(prompt("Enter a number (under 100)"));
  while(isNaN(size) || size > 100)
  {
    alert("Invalid input");
    size = Number(prompt("Enter a number (under 100)"));
  }
  return Math.round(size);
}

function createGrid(gridSize) {
  pixels = [];
  pxHeight = container.clientHeight / gridSize;
  pxWidth = container.clientWidth / gridSize;
  for(let i = 0; i < gridSize**2; i++) {
    pixels[i] = document.createElement("div");
    pixels[i].classList.add("pixel");
    pixels[i].setAttribute("style", `height: ${pxHeight}px; width: ${pxWidth}px;`)
    pixels[i].addEventListener("mouseover", () => {
      pixels[i].style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
      pixels[i].style.opacity = String(Number(getComputedStyle(pixels[i]).getPropertyValue("opacity") - 0.1));
    })

    container.appendChild(pixels[i]);
  }
}

createGrid(DEFAULT_GRID_SIZE);

const btnResize = document.querySelector("button#btn-resize");
btnResize.addEventListener("click", () => {
  let newSize = getNewSize();
  for(let i = 0; i < pixels.length; i++) {
    pixels[i].remove();
  }
  createGrid(newSize);
})
