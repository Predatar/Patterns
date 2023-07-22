{
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

  class Btn implements IBtn {
    color: string;
    width: number;
    height: number;
    click(): void {
      throw new Error('Method not implemented.');
    }
  }

  class Text implements IText {
    fontSize: number;
    fontWeight: number;
    fontFamily: string;
    color: string;
  }

  class darkBtn extends Btn {
    color: string = 'black';
    width: number = 200;
    height: number = 50;
    click() {
      console.log(`Click on ${this.color} btn`);
    }
  }

  class lightBtn extends Btn {
    color: string = 'gray';
    width: number = 225;
    height: number = 75;
    click() {
      console.log(`Click on ${this.color} btn`);
    }
  }

  class darkText extends Text {
    fontSize: number = 24;
    fontWeight: number = 500;
    fontFamily: string = 'Roboto';
    color: string = 'black';
  }

  class lightText extends Text {
    fontSize: number = 22;
    fontWeight: number = 400;
    fontFamily: string = 'Roboto';
    color: string = 'white';
  }

  class darkUIKit {
    createBtn(): IBtn {
      return new darkBtn();
    }
    createText(): IText {
      return new lightText();
    }
  }

  class lightUIKit {
    createBtn(): IBtn {
      return new lightBtn();
    }
    createText(): IText {
      return new darkText();
    }
  }

  class Web {
    private UI: darkUIKit | lightUIKit;
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

  const chrome = new Web('dark');

  console.log(chrome.getFactory().createBtn());
}
