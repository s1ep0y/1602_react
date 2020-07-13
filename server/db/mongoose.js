const mongoose = require('mongoose')

// mongodb+srv://s1ep0y:9543895qW@s1ep0y-4verb.mongodb.net/test?retryWrites=true&w=majority
mongoString = "mongodb+srv://s1ep0y:danm0l@1604-tfgom.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})