/*
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- Расчёта среднего расхода и среднего дохода
*/

let balance = 100;
const operations = [1000, -700, 300, -500, 10000];

function finishBalance() {
  for(elem of operations) {
    balance += elem
  }
  console.log(`Итоговый баланс: ${balance}`)
}

function calculateNegativBalance() {
  for(elem of operations) {
    balance += elem
    if(balance < 0) {
      console.log(false)
      return
    } else {
      console.log(true)
      return
    }
  }
}

function averageBalance() {
  let minusBalance = 0;
  let minusCount = 0
  let plusBalance = 0;
  let plusCount = 0
  for(elem of operations) {
    if(elem < 0) {
      minusCount ++
      minusBalance -= elem
    } else {
      plusCount ++
      plusBalance += elem
    }
  }
  console.log(`Средний расход: ${minusBalance / minusCount}, Средний доход: ${plusBalance / plusCount}`)
}
finishBalance()
calculateNegativBalance()
averageBalance()
