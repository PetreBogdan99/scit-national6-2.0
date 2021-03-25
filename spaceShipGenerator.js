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
  }
  generateHtmlRef() {
    this.ref = document.createElement("img");
    this.ref.src = imgRandom(img);
    this.ref.classList.add("spaceship");
    document.body.appendChild(this.ref);
  }
}
