/*
	Пользователь хочет приобрести игру в магазине
	Он может это сделать отлько если:
	- Eго баланс больше 1000 (balance) 
	или число бонусов больше 100 (bonusBalance)
	- Он не забанен (isBanned)
	- Игра не кулена (isExist)
	- Игра в продаже (isSelling)
	Напишите условие для покупки и выведите в консоль
	результат
*/

const balance = 1000;
const bonusBalance = 100;
const isBanned = true;
const isExist = true;
const isSelling = true;

const res = (balance >=1000 || bonusBalance >=100) && (isBanned && isExist && isSelling);
console.log(res)