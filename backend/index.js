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

//dummy data of products that the search function will use to populate search results
const products = [
    {  name: 'Apple', category: 'Fruits' },
    {  name: 'Banana', category: 'Fruits' },
    {  name: 'Carrot', category: 'Vegetables' },
    {  name: 'Tomato', category: 'Vegetables' },
    {  name: 'Orange', category: 'Fruits' },
    {  name: 'Potato', category: 'Vegetables' }
]
//backend search function
function searchProducts (query){
    const lowerCaseQuery = query.toLowerCase(); //making the query case insensitive

    //filtering the products
    const searchResults = products.filter((product) => {
        const lowercaseName = product.name.toLowerCase();

        return (lowercaseName.includes(lowerCaseQuery)) 
    })

    return searchResults

}

