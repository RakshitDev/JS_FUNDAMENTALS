const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

const bmw = new Car("bmw", 120);
bmw.accelerate();
bmw.brake();

const amg = new Car("AMG", 150);
amg.accelerate();
amg.brake();
