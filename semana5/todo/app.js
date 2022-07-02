// DOM:
const listTasks = document.querySelector("#list");
const inputTasks = document.querySelector("#input_newtask");
inputTasks.focus()

const arrayTasks = [];

function addTask(){
    if(inputTasks.value == ""){
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
    const task_id = checkbox.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    if (checkbox.checked) {
        task.done();
        //checkbox.setAttribute('disabled',true);
    } else {
        task.removeDone();
    }
}

function deleteTask(anchor){
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
}

const chxTaskDone = document.querySelector("#chx_task_done");

chxTaskDone.onchange = function () {
    const taskTodo = document.querySelectorAll(".todo"); // Retorna un NodeList, es decir, una lista de elementos
    const taskDelete = document.querySelectorAll(".delete");
    if(this.checked) {
        // Si es TRUE, vamos a mostrar solo las tareas terminadas, por ende vamos a buscar las tareas que tengan la clase 'todo' y 'delete' y las vamos a ocultar
        taskTodo.forEach((todo) => (todo.style.display = "none"));
        taskDelete.forEach((task) => (task.style.display = "none"));
    } else {
        taskTodo.forEach((todo) => (todo.style.display = "block"));
        taskDelete.forEach((task) => (task.style.display = "block"));
    }
}

const chxTaskDelete = document.querySelector("#chx_task_delete");

chxTaskDelete.onchange = function() {
    const taskDone = document.querySelectorAll(".done"); 
    const taskTodo = document.querySelectorAll(".todo");
    if ( this.checked){
        taskDone.forEach((done) => (done.style.display = "none"))
        taskTodo.forEach((todo) => (todo.style.display = "none"))
    } else {
        taskDone.forEach((done) => (done.style.display = "block"))
        taskTodo.forEach((todo) => (todo.style.display = "block"))
    }
}

const chxTaskTodo = document.querySelector("#chx_task_todo");

chxTaskTodo.onchange = function () {
    const taskDone = document.querySelectorAll(".done");
    const taskDelete = document.querySelectorAll(".delete");
    if(this.checked){
        taskDone.forEach((done) => (done.style.display = "none"));
        taskDelete.forEach((task) => (task.style.display = "none"));
    } else {
        taskDone.forEach((done) => (done.style.display = "block"));
        taskDelete.forEach((task) => (task.style.display = "block"));
    }
}