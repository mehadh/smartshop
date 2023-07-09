console.log("Backend Started!")

const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors());



app.get('/test', (req, res) => {
    res.send('Hello!')
} )




app.listen(3001, () => {
    console.log("express is listening")
})

