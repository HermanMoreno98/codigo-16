// DOM:
const listTasks = document.querySelector("#list");
const inputTasks = document.querySelector("#input_newtask");
inputTasks.focus();

const arrayTasks = [];

function addTask() {
  if (inputTasks.value == "") {
    alert("Ingresa un texto para la tarea");
    return;
  }
  const task = new Task(inputTasks.value);
  arrayTasks.push(task);
  document.querySelector(".form").before(task.createElement());
  inputTasks.value = "";
  inputTasks.focus();
}

function checkTask(checkbox) {
  if (checkbox.checked) {
    parentTask(checkbox).done();
    //checkbox.setAttribute('disabled',true);
  } else {
    parentTask(checkbox).removeDone();
  }
}

function deleteTask(anchor) {
  parentTask(anchor).delete();
}

function updateTask(anchor) {
    const newText = prompt("Ingrese el nuevo nombre de su tarea");
    parentTask(anchor).update(newText);
}

function parentTask(element) {
  return arrayTasks.find(
    (task) => task.id === element.parentElement.parentElement.id
  );
}

const chxTaskDone = document.querySelector("#chx_task_done");

chxTaskDone.onchange = function () {
  showOrHideElements(this.checked, ".todo", ".delete");
  // const taskTodo = document.querySelectorAll(".todo"); // Retorna un NodeList, es decir, una lista de elementos
  // const taskDelete = document.querySelectorAll(".delete");
  // if(this.checked) {
  //     // Si es TRUE, vamos a mostrar solo las tareas terminadas, por ende vamos a buscar las tareas que tengan la clase 'todo' y 'delete' y las vamos a ocultar
  //     taskTodo.forEach((todo) => (todo.style.display = "none"));
  //     taskDelete.forEach((task) => (task.style.display = "none"));
  // } else {
  //     taskTodo.forEach((todo) => (todo.style.display = "block"));
  //     taskDelete.forEach((task) => (task.style.display = "block"));
  // }
};

const chxTaskDelete = document.querySelector("#chx_task_delete");

chxTaskDelete.onchange = function () {
  showOrHideElements(this.checked, ".done", ".todo");
};

const chxTaskTodo = document.querySelector("#chx_task_todo");

chxTaskTodo.onchange = function () {
  showOrHideElements(this.checked, ".done", ".delete");
};

function showOrHideElements(checked, typeOne, typeTwo) {
  const elementsOne = document.querySelectorAll(typeOne);
  const elementsTwo = document.querySelectorAll(typeTwo);

  if (checked) {
    elementsOne.forEach((done) => (done.style.display = "none"));
    elementsTwo.forEach((todo) => (todo.style.display = "none"));
  } else {
    elementsOne.forEach((done) => (done.style.display = "block"));
    elementsTwo.forEach((todo) => (todo.style.display = "block"));
  }
}
