const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    address: {type:String, required: false},
    phone: {type:String, required: true},
    email: {type:String, required: true},
    openingHours: {type:String, required: false},
    workers : {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

    creationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationDate: {type:Date, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},
});

module.exports = mongoose.model('Shop', shopSchema);