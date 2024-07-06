const todoList = ["belajar js dasar", "belajar DOM", "Ngoding di malam hari"];

function clearTodoList() {
  const todolistbody = document.getElementById("todolistBody");
  while (todolistbody.firstChild) {
    todolistbody.removeChild(todolistbody.firstChild);
  }
}

function removeTodoList(index) {
  console.info(`remove ${index}`);
  todoList.splice(index, 1);
  displayTodoList();
}

function addTodoList(index, todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.onclick = function () {
    removeTodoList(index);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  const todolistbody = document.getElementById("todolistBody");
  todolistbody.appendChild(tr);
}

function displayTodoList() {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
}

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["todoForm"]["todo"].value; // get name "todo" yang berada di name "todoForm"

  todoList.push(todo);
  document.forms["todoForm"].reset();

  console.info(todoList);
  displayTodoList();
};

const searchInput = document.getElementById("search");
// searchInput.onchange = function () {
//   console.info("onchange");
//   displayTodoList();
// }; tidak kepake karena ini kita harus enter dulu baru ke track atau keluar dari inputan-nya!

searchInput.onkeyup = function () {
  console.info("onkeyup");
  displayTodoList();
};

searchInput.onkeydown = function () {
  console.info("onkeydown");
  displayTodoList();
};

displayTodoList();
