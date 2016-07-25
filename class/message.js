var mongoose = require('mongoose');
var dbConnect = require('../dbConnect');

var schema = mongoose.Schema({
    Userid:{
        type: String,
        required: true
    },
    Mess:{
        type: String,
        required: true
    },
    DateMess:{
        type: Date,
        default: Date.now,
        required: true
    }
});

exports.Mess = mongoose.model("Mess", schema);
//var mess = mongoose.model('Mess', schema);
