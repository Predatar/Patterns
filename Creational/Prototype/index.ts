interface Prototype<T> {
  clone(): T;
}

interface ICar extends Prototype<ICar> {
  brand: string;
  speed: number;
  mas: number[];
}

class Vehicle implements ICar {
  brand: string;
  speed: number;
  mas: number[];

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }
	

  clone(): ICar {
    return JSON.parse(JSON.stringify(this)); //deep copy
  }
}

const car1 = new Vehicle('volvo', 50);
car1.mas = [1, 2, 3, 4];

console.log(car1);
const car2 = car1.clone();
car2.mas.push(101);

console.log(car1);
console.log(car2);
