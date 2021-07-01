import{
	addTask,
	markContainer,
	formSubmitHandler,
	countTasks,
	closeBTNclickHandler,
	checkBTNclickHandler

} from './function.js'

import{
	formAddTask,
	taskList,
	taskListContainer

} from './vars.js'

formAddTask.addEventListener('submit', formSubmitHandler);

// read data
for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		const task = JSON.parse(localStorage[key]);
		addTask(task);
	}
}

taskList.addEventListener('click', closeBTNclickHandler);
taskList.addEventListener('click', checkBTNclickHandler);

markContainer();
countTasks();

