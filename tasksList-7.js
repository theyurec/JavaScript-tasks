/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

function addTask (task) {
	tasks.push(task)
	
}

function deleteTask (task) {
	const deleteEl = tasks.indexOf(task)
	if(deleteEl !== -1) {
		tasks.splice(deleteEl, 1)
	}
	
}

function addTaskStart (task) {
	const findEl = tasks.indexOf(task)
	if(findEl !== -1) {
		tasks.unshift(...tasks.splice(findEl, 1))
	}
}

addTask ('Задача 2')
addTask ('Задача 3')
console.log(tasks)

deleteTask('Задача 3')
console.log(tasks)

addTaskStart('Задача 2')
console.log(tasks)


