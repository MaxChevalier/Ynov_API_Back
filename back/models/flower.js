const mongoose = require('mongoose');

const flowerSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    trefle_id: {type:Number, required: false},

    creationDate: {type:Date, required: true},
    creationUser: {type:String, required: true},
    modificationDate: {type:Date, required: true},
    modificationUser: {type:String, required: true},
    active: {type:Boolean, required: true},

    tojson(){
        return {
            id: this._id,
            name: this.name,
            description: this.description,
            trefle_id: this.trefle_id,
            creationDate: this.creationDate,
            creationUser: this.creationUser,
            modificationDate: this.modificationDate,
            modificationUser: this.modificationUser,
            active: this.active
        }
    }
});

module.exports = mongoose.model('Flower', flowerSchema);