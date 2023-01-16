/* Релизовать методы увеличения и уменьшения баланса, 
	при котором каждая операция сохраняется в массив
	operations в виде { reason: 'Оплата налогов', sum: -100 }.
	Возвращается true, если успешно и false, если не хватает баланса
	Так же реализовать метод вывода числа операций по кошельку
 */

  const wallet = {
    balance: 100,
    operations: [],
    minusBalance: function (reason, sum) {
      if(this.balance < sum ) {
        return false
      }
      this.operations.push({reason: reason, sum: sum}) 
      this.balance += sum
      return true
    },
    plusBalance: function (reason, sum) {
      this.operations.push({reason: reason, sum: sum})
      this.balance += sum
      return true
    },
    numberOperations: function () {
      return this.operations.length
    }
  }

  console.log(wallet.minusBalance('оплата налога', -100))
  console.log(wallet.plusBalance('возврат долга', 200))
  console.log(wallet.numberOperations())
  console.log(wallet)