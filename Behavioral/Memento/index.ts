class Memento {
  constructor(public state: string) {}
  getState(): string {
    return this.state;
  }
}

class Word {
  private text: string;

  writeText(text: string) {
    this.text = text;
  }

  save(): Memento {
    return new Memento(this.text);
  }

  restore(memento: Memento): void {
    this.text = memento.getState();
  }
}

class Backup {
  private history: Memento[] = [];
  private originator: Word;

  constructor(originator: Word) {
    this.originator = originator;
  }

  backup() {
    this.history.push(this.originator.save());
  }

  undo() {
    if (this.history.length) {
      this.originator.restore(this.history.pop() as Memento);
    } else {
      console.log('Empty');
    }
  }
}

const word = new Word();
const backup = new Backup(word);

word.writeText('Hello');
backup.backup();
word.writeText('Hello world');
backup.backup();
word.writeText('Hello world!');
backup.backup();
word.writeText('Hello');
console.log(word.save().getState());
console.log(backup);
backup.undo();
console.log(word.save().getState());
console.log(backup);
