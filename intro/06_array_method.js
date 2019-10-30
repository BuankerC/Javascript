let colors = ['red', 'green', 'blue']

// for (let color of colors) {
//     console.log(color)
// }

// colors.forEach(function(color){
//     console.log(color)
// })

// colors.forEach(function(color, idx, array){
//     console.log(color, idx, array)
// })

// colors.forEach((color)=>{
//     console.log(color)
// })

// colors.forEach(color => {
//     console.log(color)
// })

// colors.forEach(color => console.log(color))

// function handlePosts(){
//     const posts = [
//         {id: 50, title: "javascript"},
//         {id: 100, title: "python"},
//         {id: 123, title: "css"},
//     ]
//     for (let i = 0 ; i < posts.length ; i++) {
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }
//     posts.forEach(function(post){
//         console.log(post)
//         console.log(post.id)
//         console.log(post.title)
//     })
// }
// handlePosts()

// const images = [
//     {height: 10 , width: 20},
//     {height: 14 , width: 25},
//     {height: 50 , width: 15}
// ]
// const areas = []

// // images.forEach(function(info) {
// //     areas.push(info.height * info.width)
// // })
// // console.log(areas)

// const numbers = [1, 2, 3, 4, 5]
// const doubleNumbers = []
// // numbers.forEach(function(number){
// //     doubleNumbers.push(number*2)
// // })
// const double = numbers.map(number => number * 2)

// console.log(double)

// map을 사용하여 넓이 배열 만들기
// const images = [
//     {height: 10 , width: 20},
//     {height: 14 , width: 25},
//     {height: 50 , width: 15}
// ]
// const map1 = images.map(x => x.height * x.width)

// console.log(map1)

// const areas = images.map(function(image){
//     return image.height * image.width
// })
// console.log(areas)

// const numbers = [1, 2, 3, 4, 5]

// const evenNumber = numbers.filter(function(number){
//     return number % 2 === 0
// })
// console.log(evenNumber)

// const products = [
//     {name: 'cucumber', type: 'vegetable'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'carrot', type: 'vegetable'},
//     {name: 'apple', type: 'fruit'},
// ]

// const type = products.filter((product) => {
//     return product.type === 'fruit'
// })
// console.log(type)

// reduce

// const scores = [100, 88, 94, 92, 80, 60]
// const total = scores.reduce((total, score)=>{
//     return total += score
// }, 0)
// const total = scores.reduce((total, score) => total += score, 0)
// console.log(total)

// find
// const users = [
//     {name: 'change', location: 'gj'},
//     {name: 'justin', location: 'gm'},
//     {name: 'sarah', location: 'gr'},
//     {name: 'kim', location: 'dj'},
//     {name: 'leo', locateion: 'dj'},
// ]

// const user = users.find(function(user){
//     return user.name === 'leo'
// })
// const user = users.find(function(user){
//     return user.location === 'dj'
// })
// console.log(user)

