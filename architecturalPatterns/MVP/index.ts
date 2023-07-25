class Model {
  private data: string | null;

  constructor() {
    this.data = null;
  }

  async fetchData(): Promise<string> {
    // Здесь происходит логика получения данных из источника (например, сервера или хранилища).
    // В данном примере просто возвращаем фиктивные данные.
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello, MVP!"), 1000);
    });
  }

  saveData(data: string) {
    // Здесь происходит логика сохранения данных в источнике (например, на сервере).
    // В данном примере просто сохраняем данные в свойство 'data'.
    this.data = data;
  }
}

class View {
  private outputElement: HTMLElement;

  constructor() {
    this.outputElement = document.getElementById("output")!;
  }

  showData(data: string) {
    this.outputElement.textContent = data;
  }

  bindButtonClick(handler: () => void) {
    const button = document.getElementById("button")!;
    button.addEventListener("click", handler);
  }
}

class Presenter {
  private model: Model;
  private view: View;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;

    // Привязываем обработчик кнопки в представлении к методу презентера.
    this.view.bindButtonClick(this.handleButtonClick.bind(this));

    // Здесь можно выполнять дополнительные настройки и инициализацию представления.
  }

  async handleButtonClick() {
    try {
      const data = await this.model.fetchData();
      this.view.showData(data);
      this.model.saveData(data); // В этом примере сохраняем данные снова в модель.
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

// Создаем экземпляры модели и представления.
const model = new Model();
const view = new View();

// Создаем презентер и передаем ему модель и представление.
const presenter = new Presenter(model, view);
