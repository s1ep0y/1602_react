const express = require('express')
const router = new express.Router()
const Artist = require('../models/artist')

router.post('/artist', async (req, res) => {
    const artist = new Artist(req.body)
    try {
        await artist.save()
        res.status(201).send(artist)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/artist', async (req, res) => {
    try {
        const artist = await Artist.find({})
        res.send(artist)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router