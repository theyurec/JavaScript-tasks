/*
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
	выведите в консоле "Успех", если нет - "Вы робот!",
	а если он введёт "Я не робот", то тоже "Успех".
*/

const answer = prompt('Сколько будет 7 + или - 15?');

// if(answer == 22 || answer == -8 || answer == 'Я не робот' ) {
//   alert('Успех')
// } else {
//   alert('Вы робот!')
// }

// switch (answer) {
//   case '22':
//   case '-8':
//   case 'Я не робот':
//   alert('Успех');
//   break;
//   default: alert('Вы робот!')
// }

answer == '22' || answer == '-8' || answer == 'Я не робот' ?  alert('Успех') : alert('Вы робот!');