/*
	Дан произвольный url - 
	'https://purpleschool.ru/course/javascript'
	Нужно сделать функцию, которая выводит в консоль:
	- Протокол (https)
	- Доменное имя (purpleschool.ru)
	- Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript'
function getPars() {
  const [protocol, _, domain, ...path] = url.split('/')
  if(protocol === 'https:' || protocol === 'http:') {
    console.log(`Протокол: ${protocol.split(':')[0]}`)
    console.log(`Доменное имя: ${domain}`)
    console.log(`Путь: /${path.join('/')}`)
  }
}

getPars()
