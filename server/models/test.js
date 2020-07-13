const mongoose = require('mongoose')

const Test = mongoose.model('Test',{
    name:{
        type: String,
        // required: true
    },
    about:{
        type: String
    }
})

module.exports = Test