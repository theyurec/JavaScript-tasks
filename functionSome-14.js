/*
	Написать функцию, которые возващает true,
	если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(arr, number) {
  const res = arr.findIndex(num => num === number)
  return (res !== -1)
}
console.log(some(arr, 5))

console.log(arr.some(elem => elem === 4))