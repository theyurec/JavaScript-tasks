/* вытащить имя и фамилию в отдельные перемнные */
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';
const username = fullUserName.slice(0, fullUserName.indexOf(' '))
const usersurname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1, fullUserName.length)
console.log(username,usersurname)