class Iterators {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collections = new Iterators(['a', 'b', 'c']);

while (collections.hasNext()) {
  console.log(collections.next());
}
