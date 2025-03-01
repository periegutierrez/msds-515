interface Task {
    id: number;
    description: string;
}

let tasks: Task[] = [];
let taskIdCounter = 0;

const newTaskInput = document.getElementById('new-task') as HTMLInputElement;
const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
const taskList = document.getElementById('task-list') as HTMLUListElement;
const filterTasksInput = document.getElementById('filter-tasks') as HTMLInputElement;

addTaskBtn.addEventListener('click', () => {
    const taskDescription = newTaskInput.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        newTaskInput.value = '';
    }
});

filterTasksInput.addEventListener('input', () => {
    const filter = filterTasksInput.value.trim().toLowerCase();
    displayTasks(tasks.filter(task => task.description.toLowerCase().includes(filter)));
});

function addTask(description: string) {
    const task: Task = { id: taskIdCounter++, description };
    tasks.push(task);
    displayTasks(tasks);
}

function displayTasks(tasks: Task[]) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description;
        taskList.appendChild(li);
    });
}

// Initial display of tasks
displayTasks(tasks);
