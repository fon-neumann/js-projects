
const container = document.querySelector("#container");
let squaresPerSide = 16;

const resetButton = document.querySelector("#reset-button");

function createGrid() {
  container.innerHTML = "";
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
      let isClicked = false; 
    container.addEventListener("mousedown", () => {
      if (isClicked) {
        square.addEventListener("mousemove", unsetBlack);
      } else {
        square.addEventListener("mousemove", setBlack);
      }
    });
    container.addEventListener("mouseup", () => {
      if (isClicked) {
        square.removeEventListener("mousemove", unsetBlack);
      } else {
        square.removeEventListener("mousemove", setBlack);
      }
    });
    square.addEventListener("click", () => {
      if (isClicked) {
        square.style.backgroundColor = "grey";
      } else {
        square.style.backgroundColor = "black";
      }
      isClicked = !isClicked; 
    });
      square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
      });
      square.addEventListener("mouseover", setColor);

    }
  }

  function setColor(e) {
    const color = getRandomColor();
    e.target.style.backgroundColor = color;
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setBlack(e) {
    e.target.style.backgroundColor = "black";
  }
  
  function unsetBlack(e) {
    e.target.style.backgroundColor = "grey";
  }
  createGrid();

  resetButton.addEventListener("click", () => {
    let newSquaresPerSide = parseInt(
      prompt("How many squares per side for the new grid?")
    );
    if (newSquaresPerSide <= 25) {
      squaresPerSide = newSquaresPerSide;
      container.style.width = `${2 * newSquaresPerSide}vw`;
      container.style.height = `${2 * newSquaresPerSide}vw`;
      createGrid();
    } else {
      alert("Please enter a number between 1 and 25.");
    }
  });
 
