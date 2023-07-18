{
  interface ICar {
    getPrice(): number;
    getDescr(): string;
  }

  class Tesla implements ICar {
    price: number = 10000;
    model: string = 'Car';

    getPrice(): number {
      return this.price;
    }
    getDescr(): string {
      return this.model;
    }
  }

  class Decorator implements ICar {
    private obj: ICar;

    constructor(obj: ICar) {
      this.obj = obj;
    }

    getPrice(): number {
      return this.obj.getPrice() + 3000;
    }

    getDescr(): string {
      return this.obj.getDescr() + ' with Decorator';
    }
  }

  const car = new Tesla();

  const decorator1 = new Decorator(car);

  console.log(decorator1.getDescr());
  console.log(decorator1.getPrice());

  const decorator2 = new Decorator(decorator1);

  console.log(decorator2.getDescr());
  console.log(decorator2.getPrice());
}
