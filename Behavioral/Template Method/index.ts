class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }
  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }
  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }
  protected send(data: string): void {
    console.log(`Отправляю ${data}`);
  }
}

class SecondAPI extends SaveForm<{ fio: string }> {
  protected fill(form: Form): { fio: string } {
    return { fio: form.name };
  }
  protected send(data: { fio: string }): void {
    console.log(`Отправляю ${data}`);
  }
}

const fomr1 = new FirstAPI();
fomr1.save(new Form('Вася'));
const form2 = new SecondAPI();
form2.save(new Form('Вася'));
