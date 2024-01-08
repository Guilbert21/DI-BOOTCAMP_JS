
class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markAsComplete(task) {
      const foundTask = this.tasks.find(t => t.task === task);
      if (foundTask) {
        foundTask.completed = true;
        console.log(`Task "${task}" marked as complete.`);
      } else {
        console.log(`Task "${task}" not found.`);
      }
    }
  
    listTasks() {
      console.log('Tasks:');
      this.tasks.forEach((t, index) => {
        const status = t.completed ? 'Complete' : 'Incomplete';
        console.log(`${index + 1}. ${t.task} - ${status}`);
      });
    }
  }
  
  module.exports = TodoList;
  