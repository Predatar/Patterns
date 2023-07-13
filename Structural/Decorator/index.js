class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class AutoPilot {
	constructor(car) {
		this.car = car;
	}
	getPrice() {
		return this.car.getPrice() + 5000;
	}
	getDescription() {
		return `${this.car.getDescription()} with autopilot`
	}
}

class Parktronic {
	constructor(car) {
		this.car = car;
	}

	getPrice(){
		return this.car.getPrice() + 3000;
	}

	getDescription() {
		return `${this.car.getDescription()} with parktronic`
	}
}

const car = new Tesla();

car = new AutoPilot(car);
car = new Parktronic(car);

console.log(car.getDescription());

const tesla = new Parktronic(new Tesla());

console.log(tesla);