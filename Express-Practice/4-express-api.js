const express = require('express')
const { products } = require('./data.js')
const app = express()

app.get('/',(req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res) => {
    const newProducts = products.map((product) => {
        const {id,name,image} = product
        return {id,name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:id',(req,res) => {
    // console.log(req.params);
    const {id} = req.params
    const singleProduct = products.find((product) => product.id === Number(id))
    if(!singleProduct){
        return res.status(404).send('Product does not exists')
    }
    res.json(singleProduct)
})

app.get('/api/v1/query',(req,res) => {
    // console.log(req.query);
    const {search,limit} = req.query
    let sortedPRoducts = [...products]
    if(search) {
        sortedPRoducts = sortedPRoducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedPRoducts = sortedPRoducts.slice(0, Number(limit))
    }
    if(sortedPRoducts.length < 1){
        // res.status(200).send('No products matched your search')
        return res.status(200).json({success:true,data:[]})  //it is always better to return your data after checking the condition or else ull get an error :Cannot set headers after they are sent to the client
    }
    return res.status(200).json(sortedPRoducts)
})

app.listen(5000,() => {
    console.log("Server is listening on port 5000");
})