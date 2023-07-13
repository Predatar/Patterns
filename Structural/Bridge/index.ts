{
  interface ICar {
    brand: string;
    speed: number;

    speedUp(): void;
    speedDown(): void;
  }

  interface IPerson {
    car: ICar;
    go(): void;
    stop(): void;
  }

  // * Абстракция
  class Person implements IPerson {
    car: ICar;

    constructor(car: ICar) {
      this.car = car;
    }

    go(): void {
      this.car.speedUp();
      console.log(`Auto: ${this.car.brand}, Speed: ${this.car.speed}`);
    }
    stop(): void {
      this.car.speedDown();
      console.log(`Auto: ${this.car.brand}, Speed: ${this.car.speed}`);
    }
  }

  // * Реализация
  class Car implements ICar {
    speed: number = 0;
    brand: string;

    speedUp(): void {
      this.speed = 50;
    }
    speedDown(): void {
      this.speed = 0;
    }
  }

  class Audi extends Car {
    brand: string = 'Audi';
    speedUp(): void {
      this.speed = 60;
    }
  }

  class Volvo extends Car {
    brand: string = 'Volvo';
  }

  const person1 = new Person(new Audi());
  const person2 = new Person(new Volvo());

  person1.go();
  person2.go();
  person1.stop();
  person2.stop();
}
