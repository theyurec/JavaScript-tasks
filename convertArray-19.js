/* преобразовать пользователей до вида
	{ fullName: 'Вася Пупкин', skillNum: 2  }
*/

const users = [
	{ 
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps'] 
	},
	{ 
		name: 'Катя', 
		surname: 'Белова',
		age: 18, 
		skills: ['Дизайн'] 
	},
];

const newUsers = users.map(elem => { 
  return  {
    fullName: `${elem.name} ${elem.surname}`,
    skillNum: elem.skills.length
  }
})
console.log(newUsers)