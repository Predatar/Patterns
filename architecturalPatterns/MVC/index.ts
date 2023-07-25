{
  class View {
    private taskList: HTMLDListElement;
    private taskInput: HTMLInputElement;
    private addButton: HTMLButtonElement;
    private onAddTask!: (task: string) => void;
    constructor() {
      this.taskList = document.getElementById('taskList') as HTMLDListElement;
      this.taskInput = document.getElementById('taskInput') as HTMLInputElement;
      this.addButton = document.getElementById('addButton') as HTMLButtonElement;

      this.addButton.addEventListener('click', () => {
        const newTask = this.taskInput.value;
        this.taskInput.value = '';
        this.onAddTask(newTask);
      });
    }
    displayTasks(tasks: string[]) {
      this.taskList.innerHTML = '';
      tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerText = task;
        this.taskList.appendChild(listItem);
      });
    }

    setOnAddTaskCallback(callback: (task: string) => void) {
      this.onAddTask = callback;
    }
  }

  class Model {
    tasks: string[] = [];

    addTask(task: string) {
      this.tasks.push(task);
    }

    getTasks() {
      return this.tasks;
    }
  }

  class Controller {
    constructor(private model: Model, private view: View) {
      this.view.setOnAddTaskCallback(task => this.addTask(task));
      this.updateView();
    }

    addTask(task: string) {
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
