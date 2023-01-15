/* 
	Найти среднее значение последовательность
	числе с помощью reduce
*/
const arr = [2, 4, 4, 10];

const res = arr.reduce((acc, elem, i) => {
  if( i == arr.length -1) {
    return (acc + elem) / arr.length
  } else {
    return acc + elem
  }
}, 0)
console.log(res)