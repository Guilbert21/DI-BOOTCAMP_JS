
const TodoList = require('./todo');


const todoList = new TodoList();

todoList.addTask('Task 1');
todoList.addTask('Task 2');
todoList.addTask('Task 3');

todoList.markAsComplete('Task 2');

todoList.listTasks();
