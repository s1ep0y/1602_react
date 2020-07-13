const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser')
// const fs = require('fs')
// const https = require('https')
// const path = require('path');
// const helmet = require('helmet')

const pageRouter = require('./routes/pages')
const artistRouter = require('./routes/artist')
const productRouter = require (`./routes/product`)
const orderRouter = require('./routes/order')

const app = express();
const port =  process.env.PORT || 3001;
const router = new express.Router()
require('./db/mongoose')


// app.use(helmet())


// app.use(helmet.hsts({
//     // Must be at least 1 year to be approved
//     maxAge: 31536000,
  
//     // Must be enabled to be approved
//     includeSubDomains: true,
//     preload: true
//   }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.set('view engine', 'pug')
app.use('/static', express.static('static'));

app.get('/sitemap.xml', function(req, res) {
    res.sendFile(__dirname + '/sitemap.xml');
    });


app.use(pageRouter)
app.use(artistRouter)
app.use(productRouter)
app.use(orderRouter)

// app.use(express.json())
// app.use(methodOverride('_method'))
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
