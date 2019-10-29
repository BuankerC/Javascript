// alert("Hello world!!")

// 여기는 주석입니다.
/*
여기서부터
여기까지는
주석입니다.
*/

document.write("<h1>HELLO WORLD<h1>")

// h1태그를 가져오기
// document.querySelector('h1')

// 가져온 태그의 내부 text를 바꿔줌
// document.querySelector('h1').innerText = "bye"

// var name = "ssafy"

// console.log(name)

// var b = 30

// for (var b = 0 ; b < 10 ; b++) {
//     console.log(b)
//     // 0, 1, 2, ... , 10
// }
// console.log('!!!!!!!')
// console.log(b)

// 재할당 가능
let name = "seon"
document.write(name)

name = "park"
document.write(name)

// 재할당 불가능
const loca = "YS"
document.write(loca)

// loca = 'Seoul'
// document.write(loca)

const first_name = "seon"
const last_name = "Yang"

const full_name = last_name + first_name

document.write('<h1>'+full_name+'</h1>')
document.write(`<h1>${full_name}</h1>`)
console.log('<h1>'+full_name+'</h1>')

const userName = prompt("hello who are you")
let message = `<h1>hello! ${userName}</h1>`
document.write(message)

if (userName === 'seon') {
    message = `<h1>admin page</h1>`
} else if (userName === 'happy') {
    message = `<h1>happy coding</h1>`
} else {
    message = `<h1>hello! ${userName}</h1>`
}
document.write(message)

const num1 = 0
const num2 = "0"

// 느슨한 같음(값을 비교)
console.log(num1==num2)
// 엄격한 같음(타입을 비교))
console.log(num1===num2)