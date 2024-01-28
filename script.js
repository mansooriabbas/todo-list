const taskInput = document.querySelector("#taskInput");
const btn = document.querySelector(".circle");
const todos = document.querySelector(".todos");
const remove = document.querySelector(".fa-trash-can");
const check = document.querySelector(".fa-square-check");
const li = document.querySelector("li");

const addTodo = () => {
  const todo = taskInput.value;
  const liElement = document.createElement("li");
  liElement.innerHTML = `<i class="fa-regular fa-square-check"> </i><span class="text">${todo}</span> <i class="fa-solid fa-trash-can"> </i>`;
  todos.appendChild(liElement);
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

btn.addEventListener("click", addTodo);
todos.addEventListener("click", removeTodo);
todos.addEventListener("click", checkTodo);
