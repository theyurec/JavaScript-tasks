// function power(pow) {
// 	return function (num) {
// 		return num**pow;
// 	}
// }
// console.log(power(5)(4))
// Переписать в стрелочную функцию

const power = pow => num => num **pow 
console.log(power(5)(4))