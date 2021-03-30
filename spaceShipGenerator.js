console.log("Spaceship Generator");

const img = ["images/1.png.png", "images/2.png.png", "images/3.png.png"];
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}
console.log(imgRandom(img));

class SpaceShip {
  constructor() {
    this.runningRockets = false;
    this.position = 0;
    this.generateHtmlRef();
    this.move(10, 10);
  }
  generateHtmlRef() {
    this.ref = document.createElement("img");
    this.ref.src = imgRandom(img);
    this.ref.classList.add("spaceship");
    document.body.appendChild(this.ref);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
  moveUp() {
    this.move(this.x, this.y - 25);
  }

  moveDown() {
    this.move(this.x, this.y + 25);
  }

  moveLeft() {
    this.move(this.x - 25, this.y);
  }

  moveRight() {
    this.move(this.x + 25, this.y);
  }
}

let keyUpPress = false;
let keyDownPress = false;
let keyLeftPress = false;
let keyRightPress = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }

  if (event.key === "ArrowRight") {
    keyRightPress = true;
  }
  if (event.key === "ArrowLeft") {
    w;
    keyLeftPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
  if (event.key === "ArrowRight") {
    keyRightPress = false;
  }
  if (event.key === "ArrowLeft") {
    keyLeftPress = false;
  }
});

const player = new SpaceShip();

let gameLoop = setInterval(() => {
  console.log(keyUpPress);

  if (keyUpPress) player.moveUp();
  if (keyDownPress) player.moveDown();
  if (keyRightPress) player.moveRight();
  if (keyLeftPress) player.moveLeft();
}, 50);
