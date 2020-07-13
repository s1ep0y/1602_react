const mongoose = require('mongoose')

const Artist = mongoose.model('Artist',{
    name:{
        type: String,
        require: true
        // required: true
    },
    slug:{
        type: String,
        require: true
    }

})

module.exports = Artist