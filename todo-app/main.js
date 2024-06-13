const completeSVG = `<svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 110-14 7 7 0 010 14z"
                    stroke="currentColor"
                  ></path>
                </svg>`;
const removeSVG = `<svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M1.5 1.5l12 12m-12 0l12-12"
                    stroke="currentColor"
                  ></path>
                </svg>`;
const editSVG = `<svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M.5 10.5l-.354-.354-.146.147v.207h.5zm10-10l.354-.354a.5.5 0 00-.708 0L10.5.5zm4 4l.354.354a.5.5 0 000-.708L14.5 4.5zm-10 10v.5h.207l.147-.146L4.5 14.5zm-4 0H0a.5.5 0 00.5.5v-.5zm.354-3.646l10-10-.708-.708-10 10 .708.708zm9.292-10l4 4 .708-.708-4-4-.708.708zm4 3.292l-10 10 .708.708 10-10-.708-.708zM4.5 14h-4v1h4v-1zm-3.5.5v-4H0v4h1z"
                    fill="currentColor"
                  ></path>
                </svg>`;

const addBtn = document.getElementById("add");
const titleText = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");

const todoList = document.getElementById("todo");
const completedList = document.getElementById("completed");

const filterOptions = document.querySelector(".filter-options");

let todoData = [];
let editMode = false;
let editId = null;

// Format Due Date
const formatDueDate = (dueDateStr) => {
  const dueDate = new Date(dueDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (dueDate.getTime() === today.getTime()) {
    return "Today";
  } else if (dueDate.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  } else if (dueDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  } else {
    return dueDateStr;
  }
};

const addTodoToDOM = () => {
  if (titleText.value && dueDate.value) {
    if (editMode) {
      const todoItem = todoData.find((todo) => todo.id === editId);
      todoItem.title = titleText.value;
      todoItem.description = description.value ? description.value : "";
      todoItem.dueDate = dueDate.value;
      todoItem.status = todoItem.status;
      editMode = false;
      editId = null;
    } else {
      let todoItem = {
        id: todoData.length + 1,
        title: titleText.value,
        description: description.value ? description.value : "",
        dueDate: dueDate.value,
        status: "In Progress",
      };

      todoData.push(todoItem);
    }

    // Render todo list
    renderSortedTodoList(todoData);

    // Clear todo inputs
    titleText.value = "";
    description.value = "";
    dueDate.value = "";

    const selectedFilter = document.querySelector(".filter-options .selected");
    if (selectedFilter) {
      if (selectedFilter.classList.contains("all")) {
        sortByAll();
      } else if (selectedFilter.classList.contains("in-progress")) {
        sortByInProgress();
      } else if (selectedFilter.classList.contains("due")) {
        sortByDueDateAsc();
      }
    } else {
      renderSortedTodoList(todoData); // Default render
    }
  }
};

// Function to render sorted todo list
function renderSortedTodoList(tasks) {
  todoList.innerHTML = "";

  tasks.forEach((todoItem) => {
    const taskItem = document.createElement("li");
    if (todoItem.status === "Completed") {
      taskItem.classList.add("completed");
    }

    // Left content of list item
    const leftContent = document.createElement("div");
    leftContent.classList.add("left");
    leftContent.innerText = todoItem.title;
    const dueSpan = document.createElement("span");
    dueSpan.classList.add("due");
    dueSpan.innerHTML = `Due: ${formatDueDate(todoItem.dueDate)}`;
    leftContent.appendChild(dueSpan);

    // Icons
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const completeBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    completeBtn.classList.add("complete");
    removeBtn.classList.add("remove");
    editBtn.classList.add("edit");

    completeBtn.innerHTML = completeSVG;
    removeBtn.innerHTML = removeSVG;
    editBtn.innerHTML = editSVG;

    removeBtn.addEventListener("click", removeTodo);
    completeBtn.addEventListener("click", completeTodo);
    editBtn.addEventListener("click", editTodo);

    buttons.appendChild(completeBtn);
    buttons.appendChild(removeBtn);
    buttons.appendChild(editBtn);

    taskItem.appendChild(leftContent);
    taskItem.appendChild(buttons);

    taskItem.setAttribute("data-id", todoItem.id);

    todoList.insertBefore(taskItem, todoList.childNodes[0]);
  });
}

function removeTodo() {
  const parent = this.parentNode.parentNode.parentNode;
  const item = this.parentNode.parentNode;
  const id = parseInt(item.getAttribute("data-id"));

  parent.removeChild(item);

  todoData = todoData.filter((todo) => todo.id !== id);

  renderSortedTodoList(todoData);
}

function completeTodo() {
  const item = this.parentNode.parentNode;
  const id = parseInt(item.getAttribute("data-id"));

  const todoItem = todoData.find((todo) => todo.id === id);

  if (todoItem.status === "Completed") {
    todoItem.status = "In Progress";
    item.classList.remove("completed");
  } else {
    todoItem.status = "Completed";
    item.classList.add("completed");
  }

  renderSortedTodoList(todoData);
}

function editTodo() {
  const item = this.parentNode.parentNode;
  const id = parseInt(item.getAttribute("data-id"));

  const todoItem = todoData.find((todo) => todo.id === id);

  titleText.value = todoItem.title;
  description.value = todoItem.description;
  dueDate.value = todoItem.dueDate;

  editMode = true;
  editId = id;
}

addBtn.addEventListener("click", () => {
  addTodoToDOM();
});

// Array of buttons
const optionButtons = filterOptions.getElementsByTagName("button");

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", function () {
    for (let j = 0; j < optionButtons.length; j++) {
      optionButtons[j].classList.remove("selected");
    }
    this.classList.add("selected");
    if (this.classList.contains("all")) {
      sortByAll();
      console.log(todoData);
    } else if (this.classList.contains("in-progress")) {
      sortByInProgress();
      console.log(todoData);
    } else if (this.classList.contains("done")) {
      sortByCompleted();
      console.log(todoData);
    } else if (this.classList.contains("due")) {
      sortByDueDateAsc();
      console.log(todoData);
    }
  });
}

// Sortings
// Sort by All
function sortByAll() {
  renderSortedTodoList(todoData); // Renders the todo list in its current order
}

// Sort by complete status ie. In Progress or Completed
function sortByInProgress() {
  const inProgressTasks = todoData.filter(
    (todo) => todo.status === "In Progress"
  );
  renderSortedTodoList(inProgressTasks);
}

function sortByCompleted() {
  const completedTasks = todoData.filter((todo) => todo.status === "Completed");
  renderSortedTodoList(completedTasks);
}

// Sort by due date
function sortByDueDateAsc() {
  const sortedByDueDate = [...todoData].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );
  renderSortedTodoList(sortedByDueDate);
}
