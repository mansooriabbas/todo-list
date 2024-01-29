const taskInput = document.querySelector("#taskInput");
const btn = document.querySelector(".circle");
const todos = document.querySelector(".todos");
const remove = document.querySelector(".fa-trash-can");
const check = document.querySelector(".fa-square-check");
const li = document.querySelector("li");
const up = document.querySelector(".fa-chevron-up");
const down = document.querySelector(".fa-chevron-down");

const addTodo = () => {
  const todo = taskInput.value;
  const liElement = document.createElement("li");
  liElement.innerHTML = `<i class="fa-regular fa-square-check"> </i><i class="fa-solid fa-chevron-up"></i><i class="fa-solid fa-chevron-down"></i><span class="text">${todo}</span> <i class="fa-solid fa-trash-can"> </i>`;
  if (todo.length > 1) {
    todos.appendChild(liElement);
    taskInput.value = "";
  }
};

const removeTodo = (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    const listItem = e.target.parentElement;
    listItem.remove();
  }
};

const checkTodo = (e) => {
  if (e.target.classList.contains("fa-square-check")) {
    const listItem = e.target.closest("li");
    listItem.querySelector(".text").classList.toggle("checked");
  }
};

const moveTodo = (e) => {
  const listItem = e.target.closest("li");
  if (e.target.classList.contains("fa-chevron-up")) {
    const prevSibling = listItem.previousElementSibling;
    if (prevSibling) {
      listItem.parentNode.insertBefore(listItem, prevSibling);
    }
  } else if (e.target.classList.contains("fa-chevron-down")) {
    const nextSibling = listItem.nextElementSibling;
    if (nextSibling) {
      listItem.parentNode.insertBefore(
        listItem,
        nextSibling.nextElementSibling
      );
    }
  }
};

btn.addEventListener("click", addTodo);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
todos.addEventListener("click", removeTodo);
todos.addEventListener("click", checkTodo);
todos.addEventListener("click", moveTodo);
