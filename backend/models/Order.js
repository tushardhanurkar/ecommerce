const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },

    brand: { type: String },
    color: { type: String },
    ram: { type: String },
    storage: { type: String },
    payment: { type: String },

    price: { type: String },

    productName: { type: String },
   
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
