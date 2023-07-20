class DocumentItem {
  text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  getState() {
    return this.state;
  }
  setState(state: DocumentItemState) {
    this.state = state;
		this.state.setContext(this)
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  name: string;
  item: DocumentItem;

  setContext(item: DocumentItem) {
    this.item = item;
  }

  abstract publish(): void;
  abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDocument';
  }
  publish(): void {
    console.log(`На сайт отправлен текст ${this.item.text}`);
    this.item.setState(new PublishDocumentItemState());
  }
  delete(): void {
    console.log('Документ удалён');
  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'PublichDocument';
  }
  publish(): void {
    console.log('Нельзя опубликовать опубликованый документ');
  }
  delete(): void {
    console.log('Снято с публикации');
    this.item.setState(new DraftDocumentItemState());
  }
}

const item = new DocumentItem();
item.text = 'asd';
console.log(item.getState());
item.publishDoc();
item.publishDoc();
console.log(item.getState());
item.deleteDoc();
console.log(item.getState());
