const DEFAULT_GRID_SIZE = 16;

let pixels = [];
const container = document.querySelector(".container");

function randomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function createGrid(gridSize) {
  for(let i = 0; i < gridSize**2; i++) {
    pixels[i] = document.createElement("div");
    pixels[i].classList.add("pixel");
    pixels[i].style.height = `${container.clientHeight / gridSize}px`;
    pixels[i].style.width = `${container.clientWidth / gridSize}px`;
    pixels[i].addEventListener("mouseover", () => {
      pixels[i].style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
    })

    container.appendChild(pixels[i]);
  }
}

createGrid(DEFAULT_GRID_SIZE);
