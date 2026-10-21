let tasks = [];

const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoContainer = document.getElementById("todoContainer");

function renderTasks() {
  todoContainer.innerHTML = "";
  
  tasks.forEach((task, index) => {
    const item = document.createElement("div");
    item.className = `task-item ${task.completed ? 'completed' : ''}`;

    item.innerHTML = `
      <div>
        <span style="cursor:pointer; font-weight:700; display:block;" onclick="toggleTask(${index})">${task.title}</span>
        <small style="color: var(--pink-700);">${task.desc}</small>
      </div>
      <button class="btn-del" onclick="deleteTask(${index})">✕</button>
    `;

    todoContainer.appendChild(item);
  });
}

if (addTaskBtn) {
  addTaskBtn.addEventListener("click", () => {
    if (!taskTitle.value.trim()) return;

    tasks.push({
      title: taskTitle.value,
      desc: taskDesc.value,
      completed: false
    });

    taskTitle.value = "";
    taskDesc.value = "";
    renderTasks();
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}