const express = require('express')
const router = new express.Router()
const Product = require('../models/product')

router.post('/product', async (req, res) =>{
    const product = new Product(req.body)
    try{
        await product.save()
        res.status(201).send(product)
    } catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/product', async (req, res) =>{
    try {
        const product = await Product.find({})
        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/product:id', async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'slug', 'artist_ID', 'description', 'price', 'sale', 'salePrice', 'pageTitle', 'pageDescription']
    const isValidOperation = updates.every((update)=> allowedUpdate.includes(update) )
    const id = req.params.id.substr(1)
    if(!isValidOperation){
        console.log(updates)
        return res.status(400).send({error: 'Invalid updates'})
    }

    try {
        console.log('trying')
        const product = await Product.findByIdAndUpdate(id, req.body, {new : true, runValidators: false})
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})


// строка на один раз, отрубить
// router.get('/products', async (req, res) =>{
//     try {
//         const products = await Product.find({})
//         products.forEach(element => {
//             let salePrice = element.price*0.792
//             Product.findById(element._id, (err, doc)=>{
//                 doc.sale = salePrice
//                 doc.save()
//             })
//         });
//         res.send(products)
//     } catch (e) {
//         res.status(500).send()
//     }
// })





module.exports = router