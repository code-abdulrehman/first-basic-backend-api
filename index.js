require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/data', (req, res) => {
    res.send("<h1>YUP</h1>")
})
const user = {
    name: "Theo",
    age: 34,
    city: "HSP"
}
app.get('/user', (req, res) => {
    res.json(user)
})

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))