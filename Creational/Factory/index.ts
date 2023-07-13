abstract class Transport {
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
  static createTransport(type: 'car' | 'boat'): Transport | undefined {
    switch (type) {
      case 'car':
        return new Car();
      case 'boat':
        return new Boat();
      default:
        console.log('Error');
        break;
    }
  }
}

console.log(TransportFactory.createTransport('car'));
