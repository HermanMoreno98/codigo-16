class Task {

    constructor(_text){
        this.id = '_' + Math.random().toString(36).slice(2);
        this.text = _text;
        this.status = 'todo';
        this.created_at = new Date();
        this.done_at = null;
        this.deleted_at = null;
    }

    done(){
        this.status = 'done',
        this.done_at = new Date();
        document.querySelector("#"+this.id).classList.add('done');
    }

    delete(){
        this.status = 'delete',
        this.deleted_at = new Date();
        document.querySelector("#"+this.id).classList.add('delete');
    }

    createElement(){
        const element = document.createElement('p');
        element.setAttribute('id', this.id);
        element.setAttribute('class','task');
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
        `;
        return element;
    }

}

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
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        task.done();
        checkbox.setAttribute('disabled',true);
    }
}

function deleteTask(anchor){
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
}