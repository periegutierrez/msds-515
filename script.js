// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    displayTasks();
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Event listener for adding tasks
document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Initialize the task list on page load
document.addEventListener('DOMContentLoaded', displayTasks);
