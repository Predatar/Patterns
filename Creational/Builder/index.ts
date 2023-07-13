class Beehive {
  parts: string[] = [];
}

interface IBuilder {
  createFamily(): this;
  addFirstLayer(): this;
  addSecondLayer(): this;
  addThirdLayer(): this;

  getResult(): Beehive;
}

class Builder implements IBuilder {
  product: Beehive;

  constructor() {
    this.product = new Beehive();
  }

  createFamily(): this {
    this.product.parts.push('createFamily');
    return this;
  }

  addFirstLayer(): this {
    this.product.parts.push('add first layer');
    return this;
  }

  addSecondLayer(): this {
    this.product.parts.push('add second layer');
    return this;
  }

  addThirdLayer(): this {
    this.product.parts.push('add third layer');
    return this;
  }

  getResult(): Beehive {
    return this.product;
  }
}

class Director {
  static construct() {
    return new Builder().createFamily().addFirstLayer().getResult();
  }
}

const beehive1 = Director.construct();

console.log(beehive1.parts);