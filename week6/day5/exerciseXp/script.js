document.addEventListener('DOMContentLoaded', initializeTasks);

function addTask() {
  const nameInput = document.getElementById('name');
  const descriptionInput = document.getElementById('description');
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');

  const name = nameInput.value;
  const description = descriptionInput.value;
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert('Invalid date format');
    return;
  }

  const newTask = {
    name,
    description,
    startDate,
    endDate,
    isCompleted: false
  };

  const tasks = fetchTasksFromLocalStorage();
  tasks.push(newTask);
  saveTasksToLocalStorage(tasks);

  refreshTasks();
  clearFormInputs(nameInput, descriptionInput, startDateInput, endDateInput);
}

function initializeTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const tasks = fetchTasksFromLocalStorage();
  sortTasksByStartDate(tasks);

  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
}

function refreshTasks() {
  initializeTasks();
}

function updateTaskStatus(index) {
  const tasks = fetchTasksFromLocalStorage();
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasksToLocalStorage(tasks);
  refreshTasks();
}

function removeTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    const tasks = fetchTasksFromLocalStorage();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    refreshTasks();
  }
}

function modifyTask(index) {
  const tasks = fetchTasksFromLocalStorage();
  const editedTask = tasks[index];

  const newName = prompt('Enter the new name:', editedTask.name);
  const newDescription = prompt('Enter the new description:', editedTask.description);
  const newStartDateString = prompt('Enter the new start date and time (YYYY-MM-DDTHH:mm):', formatDate(editedTask.startDate));
  const newEndDateString = prompt('Enter the new end date and time (YYYY-MM-DDTHH:mm):', formatDate(editedTask.endDate));

  const newStartDate = new Date(newStartDateString);
  const newEndDate = new Date(newEndDateString);

  if (isNaN(newStartDate.getTime()) || isNaN(newEndDate.getTime())) {
    alert('Invalid date format');
    return;
  }

  editedTask.name = newName;
  editedTask.description = newDescription;
  editedTask.startDate = newStartDate;
  editedTask.endDate = newEndDate;

  saveTasksToLocalStorage(tasks);
  refreshTasks();
}

function fetchTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearFormInputs(...inputs) {
  inputs.forEach(input => (input.value = ''));
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

function sortTasksByStartDate(tasks) {
  tasks.sort((a, b) => a.startDate - b.startDate);
}

function createTaskElement(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  
  if (task.isCompleted) {
    taskElement.classList.add('completed');
  } else if (task.endDate < new Date()) {
    taskElement.classList.add('overdue');
  }

  taskElement.innerHTML = `
    <h3>${task.name}</h3>
    <p>Start date: ${formatDate(task.startDate)}</p>
    <p>Days left: ${calculateDaysLeft(task.endDate)}</p>
    <p>${task.description}</p>
    <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="updateTaskStatus(${tasks.indexOf(task)})">
    <button onclick="removeTask(${tasks.indexOf(task)})">X</button>
    <button onclick="modifyTask(${tasks.indexOf(task)})">Edit</button>
  `;

  return taskElement;
}

function calculateDaysLeft(endDate) {
  const now = new Date();
  const difference = endDate - now;
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft > 0 ? daysLeft : 0;
}
