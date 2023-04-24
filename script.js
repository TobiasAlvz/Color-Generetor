const COLORS = ["green", "red", "rgba(133,122,200)", "#f15025"];

const changeColorButton = document.getElementById("btn");
const currentColorElement = document.querySelector(".span-color");

console.log(changeColorButton, currentColorElement);

changeColorButton.addEventListener("click", function () {
  console.log("Botão de mudança de cor clicado");

  const mainColorElement = document.querySelector("#main-color");
  changeBackgroundColor(mainColorElement);

  updateCurrentColor(currentColorElement);
});

function getRandomColorIndex() {
  return Math.floor(Math.random() * COLORS.length);
}

function changeBackgroundColor(element) {
  const randomColorIndex = getRandomColorIndex();
  const randomColor = COLORS[randomColorIndex];
  element.style.backgroundColor = randomColor;
}

function updateCurrentColor(element) {
  const randomColorIndex = getRandomColorIndex();
  const currentColor = COLORS[randomColorIndex];
  element.textContent = currentColor;
}
