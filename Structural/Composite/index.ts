interface IComponent {
  referenceToParent?: Folder;
  dir(indent: string): void;
  detach(): void;
}

class Folder implements IComponent {
  referenceToParent?: Folder;
  name: string;
  components: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  dir(indent: string): void {
    console.log(`${indent}<DIR> ${this.name}`);

    this.components.forEach(component => {
      component.dir(indent + '...');
    });
  }

  attach(component: IComponent) {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: IComponent) {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

class CFile implements IComponent {
  name: string;
  referenceToParent?: Folder = undefined;

  constructor(name: string) {
    this.name = name;
  }

  dir(indent: string): void {
    console.log(`${indent}<FILE> ${this.name}`);
  }

  detach(): void {
    'Detaching this leaf from its parent composite';
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}

const FileSistem = new Folder('root');

const File_1 = new CFile('abs.txt');
const File_2 = new CFile('123.txt');

FileSistem.attach(File_1);
FileSistem.attach(File_2);

const FOLDER_A = new Folder('folder_a')
FileSistem.attach(FOLDER_A)

const FILE_3 = new CFile('xyz.txt')
FOLDER_A.attach(FILE_3)

const FOLDER_B = new Folder('folder_b')
const FILE_4 = new CFile('456.txt')

FOLDER_B.attach(FILE_4)
FileSistem.attach(FOLDER_B)
FileSistem.dir('')

// now move FOLDER_A and its contents to FOLDER_B
console.log()
FOLDER_B.attach(FOLDER_A)
FileSistem.dir('')
