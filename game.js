console.log("OOP Game");

class Player {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = 0;
    this.generateRef();
    this.move(50, 225);
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.background = "green";
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;
    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}
const player = new Player();

let keyUpPress = false;
let keyDownPress = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }
  if (event.key === "ArrowUp") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }
  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});

// Game Loop

setInterval(() => {
  console.log(keyUpPress);
}, 500);
