/** packages */

//aqui van las funciones que crean, editan, actualizan, eliminan y obtienen informacion//

const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

/** using schemas */

const schema = require("../schemas/person.schema");
db();
schema.statics = {
    create: function(data){
        let doc = new this(data);
        return doc.save(doc)
    },

    getAll: function(query){
        return this.find(query)
    },

    getByDocument: function(query){
        return this.findOne({
            document: query
        })
    },

    update: function(query, data){
        console.log(query, data)
        return this.findByIdAndUpdate( query, data, {new: true} )
    },

    delete: function(query){
        return this.findByIdAndDelete(query)
    }
};

const dto = mongoose.model("coll_person", schema);
module.exports = dto;