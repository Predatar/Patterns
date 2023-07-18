{
  interface ITransport {
    do(): void;
  }
  abstract class Transport implements ITransport {
    type: string;

    do(): void {
      if (this.type == 'car') {
        console.log(`${this.type} go`);
      } else {
        console.log(`${this.type} floats`);
      }
    }
  }
  class Car extends Transport {
    constructor() {
      super();
      this.type = 'car';
    }
  }

  class Boat extends Transport {
    constructor() {
      super();
      this.type = 'boat';
    }
  }

  class TransportFactory {
    createTransport(type: 'car' | 'boat'): ITransport {
      switch (type) {
        case 'car':
          return new Car();
        case 'boat':
          return new Boat();
      }
    }
  }

  const tFactory = new TransportFactory();

  console.log(tFactory.createTransport('car').do());
}
