console.log("Backend Started!")

const express = require("express")
const app = express()


app.get('/test', (req, res) => {
    res.send('Hello!')
} )




app.listen(3001, () => {
    console.log("express is listening")
})

