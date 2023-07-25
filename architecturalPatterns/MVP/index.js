"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    constructor() {
        this.data = null;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            // Здесь происходит логика получения данных из источника (например, сервера или хранилища).
            // В данном примере просто возвращаем фиктивные данные.
            return new Promise((resolve) => {
                setTimeout(() => resolve("Hello, MVP!"), 1000);
            });
        });
    }
    saveData(data) {
        // Здесь происходит логика сохранения данных в источнике (например, на сервере).
        // В данном примере просто сохраняем данные в свойство 'data'.
        this.data = data;
    }
}
class View {
    constructor() {
        this.outputElement = document.getElementById("output");
    }
    showData(data) {
        this.outputElement.textContent = data;
    }
    bindButtonClick(handler) {
        const button = document.getElementById("button");
        button.addEventListener("click", handler);
    }
}
class Presenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // Привязываем обработчик кнопки в представлении к методу презентера.
        this.view.bindButtonClick(this.handleButtonClick.bind(this));
        // Здесь можно выполнять дополнительные настройки и инициализацию представления.
    }
    handleButtonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.model.fetchData();
                this.view.showData(data);
                this.model.saveData(data); // В этом примере сохраняем данные снова в модель.
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        });
    }
}
// Создаем экземпляры модели и представления.
const model = new Model();
const view = new View();
// Создаем презентер и передаем ему модель и представление.
const presenter = new Presenter(model, view);
