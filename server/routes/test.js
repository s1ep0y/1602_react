const express = require('express')
const router = new express.Router()
const Test = require('../models/test')

router.post('/tests', async (req, res) =>{
    const test = new Test(req.body)
    console.log(test.name)
    try{
        await test.save()
        res.status(201).send(test)
    } catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/tests', async (req, res) =>{
    try {
        const test = await Test.find({})
        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/test/:id', async (req, res) =>{
    const _id = req.params.id

    try{
        const test = await Test.findById(_id)
        if(!test){
            return res.status(404).send()
        }
        res.status(201).send(test)
    } catch(e){
        return res.status(500).send()
    }
})

module.exports = router