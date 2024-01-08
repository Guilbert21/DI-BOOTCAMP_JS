document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const startDateString = document.getElementById('startDate').value;
  const endDateString = document.getElementById('endDate').value;


  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);


  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert('Invalid date format');
    return;
  }

  const task = {
    name,
    description,
    startDate,
    endDate,
    isCompleted: false
  };

  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  saveTasksToLocalStorage(tasks);

  loadTasks();
  clearForm();
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const tasks = getTasksFromLocalStorage();
  tasks.sort((a, b) => a.startDate - b.startDate);

  tasks.forEach(task => {
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
      <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="updateStatus(${tasks.indexOf(task)})">
      <button onclick="deleteTask(${tasks.indexOf(task)})">X</button>
      <button onclick="editTask(${tasks.indexOf(task)})">Edit</button>
    `;

    taskList.appendChild(taskElement);
  });
}

function updateStatus(index) {
  const tasks = getTasksFromLocalStorage();
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveTasksToLocalStorage(tasks);
  loadTasks();
}

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    loadTasks();
  }
}

function editTask(index) {
  const tasks = getTasksFromLocalStorage();
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
  loadTasks();
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

function calculateDaysLeft(endDate) {
  const now = new Date();
  const difference = endDate - now;
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft > 0 ? daysLeft : 0;
}
