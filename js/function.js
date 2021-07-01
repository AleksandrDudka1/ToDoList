import{
	formAddTask,
	taskList,
    taskListContainer

} from './vars.js'

export function addTask(task) {
	const listItem = document.createElement('li');
	listItem.innerText = task.title;
	listItem.classList.add('list-item');
	listItem.setAttribute('data-id', task.id);

	const btnDelete = document.createElement('button');
	btnDelete.classList.add('btn-close');
	btnDelete.innerHTML = '&times;';

    const btnCheck = document.createElement('button');
	btnCheck.classList.add('btn-check');
	btnCheck.innerHTML = '&times;';
    


	taskList.appendChild(listItem);
	listItem.appendChild(btnDelete);
    listItem.appendChild(btnCheck);

}

export function markContainer() {
	if (localStorage.length) {
		taskListContainer.classList.add('has-tickets');
	} else {
		taskListContainer.classList.remove('has-tickets');
	}
}

export function countTasks() {
	const element = document.querySelector('#task-count');

	const values = Object.values(localStorage);

    /// переделать 

	element.innerText = values.filter(item => !JSON.parse(item).done).length;
}

export function formSubmitHandler(event) {
	event.preventDefault();

	const task = {
		title: this.children.title.value, // input value
		done: false,
		id: new Date().getTime()
	};

	addTask(task);

	localStorage.setItem(String(task.id), JSON.stringify(task));

	markContainer();
	countTasks();

	this.reset();
}

export const closeBTNclickHandler = event => {
	if (!event.target.classList.contains('btn-close')) return;

	// const parentNode = event.target.parentNode;
	const { parentNode } = event.target; // <li>

	const taskId = parentNode.getAttribute('data-id');
	localStorage.removeItem(taskId);
	parentNode.remove();

	markContainer();
	countTasks();
}

export const checkBTNclickHandler = event => {
	if (!event.target.classList.contains('btn-check')) return;
    console.log(`vcvc`)

	// const parentNode = event.target.parentNode;
	const { parentNode } = event.target; // <li>

	const taskId = parentNode.getAttribute('data-id');
    parentNode.classList.toggle('completed');
    const task = JSON.parse(localStorage.getItem(taskId));
    task.done = !task.done;
    localStorage.setItem(taskId,JSON.stringify(task))

    countTasks();
}