const mongoose = require('mongoose')

const Product = mongoose.model('Product',{
    name:{
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
    },
    artist_ID:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    sale:{
        type: Number,
    },
    pageTitle:{
        type: String
    },
    pageDescription:{
        type: String
    }
})

module.exports = Product