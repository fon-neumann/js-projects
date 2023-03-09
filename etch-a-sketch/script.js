
const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");
let squaresPerSide = 16;

function createGrid() {
  container.innerHTML = "";
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const square = document.createElement("div");
      square.style.width = `${32 / squaresPerSide}vw`;
      square.style.height = `${32 / squaresPerSide}vw`;
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
  
  let passCount = 0;

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
  const lightness = 100-passCount*10;
  passCount++;
  if (lightness <= 10) {
    passCount = 0;
  }
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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
    if (newSquaresPerSide <= 100) {
      squaresPerSide = newSquaresPerSide;
      
      createGrid();
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });
 
