
const container = document.querySelector("#container");
  
  let squaresPerSide = 16;

  function createGrid() {
   
    for (let i = 1; i < squaresPerSide * squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.addEventListener("mousedown", () => {
        square.addEventListener("mousemove", setBlack);
      });
      container.addEventListener("mouseup", () => {
        square.removeEventListener("mousemove", setBlack);
      });
      square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
      });
      container.appendChild(square);
    }
  }

  function setBlack(e) {
    e.target.style.backgroundColor = "black";
  }

  createGrid();
