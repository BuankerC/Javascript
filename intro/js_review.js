// function scope
// var a = 0

// function testA() {
//     for (var a = 0; a < 5; a++) {
//         console.log(a)
//     }
//     console.log(a)
// }
// testA()
// console.log(a)

// block scope
// let a = 0
// for (a = 0; a < 5; a++) {
//     console.log(a)
// }
// console.log(a)

// 재할당 불가
// const user = {
//     name: 'seon',
//     phone: 'galaxy',
// }
// user.name = 'yang'
// console.log(user)
// 재할당이 안된다는 것은 기존의 값을 비우고 새로운 값을 채우는 것이 안되는 것, 
// 기존의 값을 대체하는 건 가능!!


// 재할당 가능
// let user2 = {
//     name: 'seon',
//     phone: 'galaxy',
// }
// user2 = {}
// console.log(user2)

// 자료형 구분(datatype)
// console.log(typeof '123') // string
// console.log(typeof 123) // number
// console.log(typeof true) // boolean
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined
// console.log(typeof NaN) // number
// console.log(typeof {}) // object
// console.log(typeof
//     function () {}) // function
// console.log(typeof Infinity) // number
// console.log(typeof []) // object

// 배열
// const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray.length)

// console.log(myArray.reverse())
// console.log(myArray.push(6))
// console.log(myArray.pop())
// console.log(myArray.unshift(-1))
// console.log(myArray.shift())
// console.log(myArray)

// console.log(myArray.indexof(100))
// console.log(myArray.indexOf(100))
// console.log(myArray.join('-'))
// console.log(myArray)

// const endGame = {
//     title: '어벤져스: 엔드게임',
//     'my-lovers': [{
//             name: '아이언맨',
//             actor: '로다주'
//         },
//         {
//             name: '헐크',
//             actor: '마크 러팔로'
//         }
//     ]
// }
// console.log(endGame['my-lovers'][1].actor)

// const welcome = function () {
//     console.log('책방에 오신 걸 환영합니다.')
// }
// welcome()
// // 함수를 변수에 저장함

// const comics = {
//     'DC': ['Aquaman', 'SHAZAM'],
//     'Marvel': ['Captain Marvel', 'Avengers']
// }
// const magazines = null

// const bookShop = {
//     comics,
//     magazines,
//     greeting: welcome
// }
// bookShop.greeting()

const phone = {
    number: 12345678,
    address: 'gj',
    model: 'huawei',
    phoneBook: [
        '010-1234-1234',
        '010-3333-2221'
    ],
    call: () => {
        console.log('RingRing')
    },
    status: true,
    powerOn: function () {
        this.status = true
    },
    powerOff: function () {
        this.status = false
    },
    // arrow: () => {
    //     console.log(this)
    // },
    // 부모의 최상단을 가리킴, 웹에서는 window를 가리킴, 
    // 노드에서는 브라우저가 존재하지 않기 때문에 빈 오브젝트 출력 

    // keyword: function () {
    //     console.log(this)
    // }
    // 실행하고 있는 오브젝트 자체를 의미
    numberChange(newNumber) {
        this.number = newNumber
    },
}
// phone.powerOff()
// console.log(phone.status)
// phone.powerOn()
// console.log(phone.status)
phone.numberChange('010-1234-5678')
console.log(phone.number)

// JSON
// key-value 형태의 자료구조를 JS Object와 유사한 모습으로 표현하는 표기법.
// ""가 붙어있음

// 함수 : 함수 선언식, 함수 표현식, 화살표 함수 정리하기

// syntatic sugar 정리하기(생략 가능한 문법들)

// Array Helper Methods 정리

// Event Listener 정리