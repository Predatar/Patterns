interface IBtn {
  color: string;
  width: number;
  height: number;
  click(): void;
}

interface IText {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  color: string;
}

class darkBtn implements IBtn {
  color: string = 'black';
  width: number = 200;
  height: number = 50;
  click() {
    console.log(`Click on ${this.color} btn`);
  }
}

class lightBtn implements IBtn {
  color: string = 'gray';
  width: number = 225;
  height: number = 75;
  click() {
    console.log(`Click on ${this.color} btn`);
  }
}

class darkText implements IText {
  fontSize: number = 24;
  fontWeight: number = 500;
  fontFamily: string = 'Roboto';
  color: string = 'black';
}

class lightText implements IText {
  fontSize: number = 22;
  fontWeight: number = 400;
  fontFamily: string = 'Roboto';
  color: string = 'white';
}

abstract class UIKit {
  abstract createBtn(): IBtn;
  abstract createText(): IText;
}

class darkUIKit extends UIKit {
  createBtn(): IBtn {
    return new darkBtn();
  }
  createText(): IText {
    return new lightText();
  }
}

class lightUIKit extends UIKit {
  createBtn(): IBtn {
    return new lightBtn();
  }
  createText(): IText {
    return new darkText();
  }
}

class Web {
  private UI: UIKit;
  constructor(UI: 'dark' | 'light') {
    switch (UI) {
      case 'dark':
        this.UI = new darkUIKit();
        break;
      case 'light':
        this.UI = new lightUIKit();
        break;
      default:
        break;
    }
  }
  getFactory() {
    return this.UI;
  }
}

// TODo исправить UML

const chrome = new Web('dark');

console.log(chrome.getFactory().createBtn());
