var tasks = [];
var taskIdCounter = 0;
var newTaskInput = document.getElementById('new-task');
var addTaskBtn = document.getElementById('add-task-btn');
var taskList = document.getElementById('task-list');
var filterTasksInput = document.getElementById('filter-tasks');
addTaskBtn.addEventListener('click', function () {
    var taskDescription = newTaskInput.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        newTaskInput.value = '';
    }
});
filterTasksInput.addEventListener('input', function () {
    var filter = filterTasksInput.value.trim().toLowerCase();
    displayTasks(tasks.filter(function (task) { return task.description.toLowerCase().includes(filter); }));
});
function addTask(description) {
    var task = { id: taskIdCounter++, description: description };
    tasks.push(task);
    displayTasks(tasks);
}
function displayTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(function (task) {
        var li = document.createElement('li');
        li.textContent = task.description;
        taskList.appendChild(li);
    });
}
// Initial display of tasks
displayTasks(tasks);
