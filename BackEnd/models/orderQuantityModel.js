const mongoose = require('mongoose');

const orderQuantitySchema = mongoose.Schema({
    quantity: {
        type: Number,
        default :1,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

exports.OrderItem = mongoose.model('OrderQuantity', orderQuantitySchema);
