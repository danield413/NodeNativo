/** packages */

//aqui van las funciones que crean, editan, actualizan, eliminan y obtienen informacion//

const mongoose = require("mongoose");

/** using schemas */

const schema = require("../schemas/person.schema");

schema.statics = {
    create: function(data, cb){
        let doc = new this(data);
        doc.save(cb)

    },

    getAll: function(query, cb){
        this.find(query, cb);

    },

    getByDocument: function(query, cb){
        this.find(query, cb);

    },

    update: function(query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);

    },

    delete: function(query, cb){
        this.findOneAndDelete(query);

    }
};

const dto = mongoose.model("coll_person", schema);
module.exports = dto;