const mongoose = require('mongoose');

const flowerSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    trefle_id: {type:Number, required: true},

    creationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationDate: {type:Date, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},
});

module.exports = mongoose.model('Flower', flowerSchema);