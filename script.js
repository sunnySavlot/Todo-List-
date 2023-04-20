const input = document.querySelector(`#input`);
const EnterButton = document.querySelector(`#EnterButton`);
const ulElement = document.querySelector(`#ulElement`);
const h1 = document.querySelector("h1");

const tasks =  [];

function getGreeting() {
  const date = new Date();
  const hour = date.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Bonjour Sylvia! 😘";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Bonne Journée Sylvia! 😘";
  } else {
    greeting = "Bonsoir Sylvia! 😘";
  }

  return greeting;
}
function createListElement() {
  const li = document.createElement(`li`);
  li.textContent = input.value;
  ulElement.appendChild(li);

  const deleteButton = document.createElement(`button`);
  deleteButton.textContent = `Delete`;
  deleteButton.classList.add(`delete-btn`);
  li.appendChild(deleteButton);
  deleteButton.addEventListener(`click`, () => li.remove());
}

function addTask(text) {
  const todo = {
    id: Date.now(),
    task: text,
    isCompleted: false,
  };

  tasks.push(todo);
}

function addListItemOnClick() {
  if (input.value !== ``) {
    addTask(input.value);
    createListElement();
    tasks.push(input.value);

    input.value = ``;
  }
}
function addListItemOnEnter(event) {
  if (input.value !== `` && event.key === `Enter`) {
    createListElement();
    tasks.push(input.value);
    input.value = ``;
  }
}
function toggleDoneClass(event) {
  if (event.target.tagName === `LI`) {
    event.target.classList.toggle(`done`);
  }
}

h1.textContent = getGreeting();

EnterButton.addEventListener(`click`, addListItemOnClick);

input.addEventListener(`keypress`, addListItemOnEnter);

ulElement.addEventListener(`click`, toggleDoneClass);
