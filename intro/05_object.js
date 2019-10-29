const me = {
    name: 'seon',
    'phone number': '01012311121',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}
// console.log(me.name)
// console.log(me.product.notebook)

// let books = ['javascript', 'python']
// let comics = {
//     DC: ['Aquaman', 'Superman'],
//     Marvle: ['Avengers', 'Ironman'],
// }

// let bookStore = {
//     books,
//     comics
// }

// console.log(bookStore)

// JSON
console.log(me)
const jsonData = JSON.stringify(me)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)