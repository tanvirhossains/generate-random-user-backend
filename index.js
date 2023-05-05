const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

const cors = require("cors");
const userRoute = require('./routes/v1/userRoutes');
app.use(cors());
app.use(express.json())

const users = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(users);




app.use('/user', userRoute)
// app.use('/user', (req, res) => {
//     getData()
//     async function getData() {
//         const url = 'https://jsonplaceholder.typicode.com/users';
//         const response = await fetch(url);
//         const result = await response.json();
//         console.log("data found");
//         res.send(result)
//     }
//     console.log("data sended");
// })




app.get('/', (req, res) => {
    res.send('Hello World!dfdfd')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})