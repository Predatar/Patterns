"use strict";
{
    class View {
        constructor() {
            this.taskList = document.getElementById('taskList');
            this.taskInput = document.getElementById('taskInput');
            this.addButton = document.getElementById('addButton');
            this.addButton.addEventListener('click', () => {
                const newTask = this.taskInput.value;
                this.taskInput.value = '';
                this.onAddTask(newTask);
            });
        }
        displayTasks(tasks) {
            this.taskList.innerHTML = '';
            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.innerText = task;
                this.taskList.appendChild(listItem);
            });
        }
        setOnAddTaskCallback(callback) {
            this.onAddTask = callback;
        }
    }
    class Model {
        constructor() {
            this.tasks = [];
        }
        addTask(task) {
            this.tasks.push(task);
        }
        getTasks() {
            return this.tasks;
        }
    }
    class Controller {
        constructor(model, view) {
            this.model = model;
            this.view = view;
            this.view.setOnAddTaskCallback(task => this.addTask(task));
            this.updateView();
        }
        addTask(task) {
            this.model.addTask(task);
            this.updateView();
        }
        updateView() {
            const tasks = this.model.getTasks();
            this.view.displayTasks(tasks);
        }
    }
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
}
