// // 함수 선언식
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2, 10))


// // 함수 표현식
// const sub = function(num1, num2) {
//     return num1 - num2
// }
// console.log(sub(10, 2))

// // 함수 표현식
// const ssafy1 = function(name) {
//     console.log(`hello ${name}`)
// }
// ssafy1('change')

// // 화살표 함수, arrow function
// const ssafy2 = (name) => {
//     console.log(`hello ${name}`)
// }
// ssafy2('seon')

// // 화살표 함수 소괄호 생략, 매개 병수 하나일 때
// const ssafy3 = name => {
//     console.log(`hello ${name}`)
// }
// ssafy3('yang')

// // 화살표 함수 중괄호 생략, 표현식 하나일 때
// const ssafy4 = name => `hello ${name}`
// console.log(ssafy4('kim'))

// let square = function(num) {
//     return num ** 2
// }

// square = (num) => {
//     return num ** 2
// }

// square = num => {
//     return num ** 2
// }

// square = num => num ** 2

// let noArgs = _ => 'no args'
// noArgs = () => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)

// let returnObject = () => ({key: 'value'})

// const hello = (name="noName") => `hello ${name}`
// console.log(hello())

// 기명함수
const hello = function (name) {
    console.log(name)
}
hello('seon')

// 익명함수
(function (name) {
    console.log(name)
})('seon')


