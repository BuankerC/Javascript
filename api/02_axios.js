const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/postss')
.then((response)=>{
  console.log(response)
})
.catch((error)=>{
  console.log(error)
})

