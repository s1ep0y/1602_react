const express = require('express')
const router = new express.Router()
const Product = require('../models/product')
const Artist = require('../models/artist')
const robots = require('express-robots-txt')

router.get('/', async (req, res) => {
    console.log('try to get index')
    try {
        const products = await Product.find({})
    for (const product of products) {
        const artist = await Artist.findById(product.artist_ID)
        product.artist = artist
    }
    res.send({products});
    } catch (error) {
        res.status(500).send({errors: error})
    }

})

router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: / \n Sitemap: 1602.ru/sitemap.xml");
});

router.get('/product/:slug', async (req, res) => {
    const slug = req.params.slug
    try {
        const product = await Product.find({slug})
        const productSlider = await Product.find({})

        for (const product of productSlider) {
            const artist = await Artist.findById(product.artist_ID)
            product.artist = artist
        }

        productSlider.sort(() => Math.random() - 0.5)
        productSlider.length = 6

        const artist = await Artist.findById(product[0].artist_ID)

        if (!product) {
            return res
                .status(404)
                .send()
        }
        res.send({product: product[0], artist, productSlider})
    } catch (e) {
        return res
            .status(500)
            .send({errors: e})
    }
})

// router.get('/makeorder', async (req,res)=>{     res.render('makeorder') })
// router.get('/politik153', async(req, res) =>{     res.render('politik153') })
// router.get('/delivery', async(req, res)=>{     res.render('delivery') })
// router.get('/contacts', async(req, res)=>{     res.render('contacts') })
// router.get('/backitempolitik', async(req, res)=>{
// res.render('backitempolitik') }) router.get('/sizebraket', async(req, res)=>{
// res.render('sizebraket') }) router.get('/userterms', async(req, res)=>{
// res.render('userterms') }) router.get('/sendpolitik', async(req, res)=>{
// res.render('sendpolitik') }) router.get('/konfpolitik', async(req, res)=>{
// res.render('konfpolitik') }) router.get('/personalpolitik', async(req,
// res)=>{     res.render('personalpolitik') }) router.get('/aboutus',
// async(req, res)=>{     res.render('aboutus') }) router.get('/uhod',
// async(req, res)=>{     res.render('uhod') }) userterms.pug sendpolitik.pug
// konfpolitik.pug personalpolitik.pug

module.exports = router