const mongoose = require('mongoose');

const bouquetSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    quantity: {type:Number, required: true},
    flowers: {type:Array, required: true},
    shop: {type:mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true},

    creationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationDate: {type:Date, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},
});

module.exports = mongoose.model('Bouquet', bouquetSchema);