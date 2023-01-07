/*
	Вася положил 12 000$ на вклад 7% годовых с
	капитализацией 1 раз в месяц.
	Вывести в консоль, сможет ли он купить дом за 13 500$
	через 2 года после снятия вклада. И остаток после покупки.

	Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const money = 12000;
const percent = 0.07;
const month = 24;
const house = 13500;

const result = Math.round(money * (1 + percent / 12) ** 24);
console.log(result)
if(result >= house) {
  console.log(`Вася сможет купить дом и у него останется ${result % money}$`)
} else {
  console.log(`Вася не сможет купить дом`)
}