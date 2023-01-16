/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';


function phoneNumber(num) {
  num = num.trim();
  num = num.replace('+7', '8');
  if(!num.startsWith('8')) {
    return false
  }
  num = num.replaceAll('(', '')
  num = num.replaceAll(')', '')
  num = num.replaceAll('-', '')
  num = num.replaceAll(' ', '')
  if(num.length != 11) {
    return false
  }
  let onlyNumber = true
  for(const elem of num) {
    if(isNaN(Number(elem))) {
      onlyNumber = false
      break
    }
  }
  return onlyNumber
}


console.log(phoneNumber(num1))
console.log(phoneNumber(num2))
console.log(phoneNumber(num3))
console.log(phoneNumber(num4))
console.log(phoneNumber(num5))

console.log(phoneNumber(num1Error))
console.log(phoneNumber(num2Error))
console.log(phoneNumber(num3Error))
console.log(phoneNumber(num4Error))