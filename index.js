console.log("JavaScript OOP Game");

// object literal
// this comes from Object class
const obj = {};

const a = new Object();
console.log(a);

// this comes from Array class
const b = [];

class Car {
  constructor(color) {
    this.color = color;
  }
  startCar() {
    console.log("Start Car");
  }
}

class CarWithElectricWindows extends Car {
  openElectricWindow(windowNr) {
    console.log("Opening window", windowNr);
  }
}

const car1 = new Car("white");
console.log(car1);

const car2 = new CarWithElectricWindows("black");
console.log(car2);
car2.startCar();
car2.openElectricWindow(3);

class MyArray extends Array {
  printLengthWithJoy() {
    console.log(this.length + " with joy");
  }
}

const MyArray1 = new MyArray();
MyArray1.push("abc");
MyArray1.push("abcd");
console.log(MyArray1);
MyArray1.printLengthWithJoy();
