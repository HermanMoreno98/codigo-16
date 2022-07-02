class Task {
  constructor(_text) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.text = _text;
    this.status = "todo";
    this.created_at = new Date();
    this.done_at = null;
    this.deleted_at = null;
  }

  changeStatus(statusAdd, statusRemove) {
    this.status = statusAdd;
    statusAdd === "delete"
      ? (this.deleted_at = new Date())
      : (this.done_at = new Date());
    const element = document.querySelector("#" + this.id);
    element.classList.add(statusAdd);
    element.classList.remove(statusRemove);
  }

  done() {
    this.changeStatus("done", "todo");
  }

  delete() {
    this.changeStatus("delete", "todo");
  }

  update(newText) {
    const element = document.querySelector(`#${this.id}`);
    // children[0] es el primer hijo de la etiqueta <p>, el cual es <di>
    // children[1] es el segundo hijo de la etiqueta <div<, el cual es <span>
    element.children[0].children[1].textContent = newText;
  }

  removeDone() {
    this.changeStatus("todo", "done");
  }

  createElement() {
    const element = document.createElement("p");
    element.setAttribute("id", this.id);
    element.setAttribute("class", "task todo");
    element.innerHTML = `
        <div>
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
        </div>
        <div>
            <a onclick="updateTask(this);">✍🏻</a>
            <a onclick="deleteTask(this);">❌</a>
        </div>
        `;
    return element;
  }
}
