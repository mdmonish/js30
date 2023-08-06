
let secondaryColor;
let count = 0;

const colorBoard = document.querySelector(".color__board");

const randomGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const random1 = () => {
  const one = randomGenerator(0, 255);
  const two = randomGenerator(0, 255);
  const three = randomGenerator(0, 255);
  secondaryColor = random2(one, two, three);
  return `rgb(${one},${two},${three})`;
};
const random2 = (a, b, c) => {
  if (c <= 255 && c >= 50) {
    c = c - 35;
  } else {
    c = c + 35;
  }
  return `rgb(${a},${b},${c})`;
};
random1();

function displayBlocks() {
  colorBoard.innerHTML = "";
  const pickedColor = random1();
  const randomIndex = randomGenerator(0, 15);

  for (let i = 0; i < 4 * 4; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    if (i === randomIndex) {
      div.style.background = secondaryColor;
    } else {
      div.style.background = pickedColor;
    }
    colorBoard.appendChild(div);
  }
}
displayBlocks();

colorBoard.addEventListener("click", function (e) {
  if (e.target.classList.contains("block")) {
    const selectedColor = e.target.style.backgroundColor.replaceAll(" ", "");
    if (selectedColor === secondaryColor) {
      count++;
    } else {
      count = 0;
    }
    document.querySelector("span").textContent = `${count}`;
    displayBlocks();
  }
});
