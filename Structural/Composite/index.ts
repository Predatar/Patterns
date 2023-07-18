abstract class Item {
  items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
  }

  getItemPrice(): number {
    return this.items.reduce((a, b) => a + b.getPrice(), 0);
  }

  abstract getPrice(): number;
}

class Packege extends Item {
  getPrice(): number {
    return this.getItemPrice();
  }
}

class Product extends Item {
  constructor(public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

const shop = new Packege();

shop.addItem(new Product(150));

const pack1 = new Packege();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
shop.addItem(pack1);

console.log(shop.getPrice());
