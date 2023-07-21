interface Visitor {
  visit(part: Part): void;
}
interface Visitable {
  accept(visitor: Visitor): void;
}

class Part implements Visitable {
  constructor(public name: string) {}

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

class Visitor1 implements Visitor {
  visit(part: Part): void {
    console.log(part.name);
  }
}

const part1 = new Part('asd');
part1.accept(new Visitor1())