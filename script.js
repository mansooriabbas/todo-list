const taskInput = document.querySelector("#taskInput");
const btn = document.querySelector(".circle");
const todos = document.querySelector(".todos");
const remove = document.querySelector(".fa-trash-can");

const addTodo = () => {
  const todo = taskInput.value; //declaring the taskinput.value into a shorter variable
  const liElement = document.createElement("li"); //creating a list element
  liElement.innerHTML = ` ${todo} <i class="fa-solid fa-trash-can"> </i>`; // adding the html to the list element, here i dont need to add <li>content</li> since the line above already creates the list
  todos.appendChild(liElement); // append the liElement to the ul element
};

const removeTodo = (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    const listItem = e.target.parentElement;
    listItem.remove();
  }
};
btn.addEventListener("click", addTodo);
todos.addEventListener("click", removeTodo);
