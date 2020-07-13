const mongoose = require('mongoose')
const Product = require('../models/product')
const Schema = mongoose.Schema;





const orderSchema = new mongoose.Schema({

    DeliveryType:{
        type: String
    },
    buyerName: {
        type: String
    },
    buyerCity:{
        type: String
    },
    buyerEmail: {
        type: String
    },
    buyerPhoneNumber: {
        type: String
    },
    buyerStreet: {
        type: String
    },
    buyerAdress:{
        type: String
    },
    buyerApparts:{
        type: String
    },
    comment: {
        type: String
    },
    totalPrice:{
        type: Number
    },
    items: {
        type: Array,
        default: []
    },
}, 
    {timestamps: true}
)

const Order = mongoose.model('Order',orderSchema)

module.exports = Order