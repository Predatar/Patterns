abstract class Transport {
  type: string;
  constructor(type: 'car' | 'boat') {
    this.type = type;
  }
  do(): void {
    if (this.type == 'car') {
      console.log(`${this.type} go`);
    } else {
      console.log(`${this.type} floats`);
    }
  }
}
class Car extends Transport {}

class Boat extends Transport {}

abstract class TransportFactory {
  abstract createTransport(): Transport;
}

class CarFactory extends TransportFactory {
  createTransport(): Transport {
    return new Car('car');
  }
}

class BoatFactory extends TransportFactory {
  createTransport(): Transport {
    return new Boat('boat');
  }
}

function createTransport(type: 'car' | 'boat') {
  switch (type) {
    case 'car':
      return new CarFactory().createTransport();
    case 'boat':
      return new BoatFactory().createTransport();
    default:
      console.log('Error');
      break;
  }
}

console.log(createTransport('boat')?.do());
