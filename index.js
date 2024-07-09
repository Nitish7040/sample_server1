const express = require('express')
const app = express()

require('dotenv').config()
// console.log(process.env) 

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req, res) =>{
    res.send('welcome to my home page')
})
app.get('/about',(req, res) => {
    res.send('<h1>This is about page</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})