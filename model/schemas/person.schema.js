//packages//

const mongoose = require("mongoose");

const validator = require("mongoose-unique-validator");

//Schema creation

const Schema = mongoose.Schema;



const personSchema = new Schema ({

    document:{
        type: "String",
        require: true,
        unique : true
    },

    name: {
        type: "String",
        require: true
    },

    lastname: {
        type: "String",
        require: true
    },

    email: {
        type: "String",
        require: true,
        unique: true
    },

    phone: {
        type: "String",
        require: true

    },

    age: {
        type: "Number",
        require: true
    },

    address: {
        type: "String",
        require: true
    },

    profession: {
        type: "String",
        require: true
    },

    marital_status: {
        type: "String",
        require: true
    },

    blood_type: {
        type: "String",
        require: true
    }


});

//schema exportation 
personSchema.plugin(validator);
module.exports = personSchema;