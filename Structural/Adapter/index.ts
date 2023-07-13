interface Method {
  getNumber(): void;
}

class Pixel implements Method {
  px: number;

  constructor(px: number) {
    this.px = px;
  }

  getNumber() {
    console.log(`${this.px}px`);
  }
}

class Rem implements Method {
  rem: number;

  constructor(rem: number) {
    this.rem = rem;
  }

  getNumber() {
    console.log(`${this.rem}rem`);
  }
}

class AdapterPxToRem implements Method {
  private adaptive: Pixel;

  constructor(px: number) {
    this.adaptive = new Pixel(px);
  }

  getNumber() {
    console.log(`${this.adaptive.px / 16}rem`);
  }
}

const Item = [new Pixel(20), new Rem(2)];

Item.forEach(elem => {
  elem.getNumber();
});

const Adapted = [new AdapterPxToRem(20), new Rem(2)];

Adapted.forEach(elem => elem.getNumber());
