var mongoose = require('mongoose');
var dbConnect = require('../dbConnect');

var schema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
   /* email:{
        type: String,
        required: true
    },*/
    subscribed: {            //  кто подписан
        type: Array,
        required: false
    },
    subscrib: {          // на кого подписан
        type: Array,
        required: false
    }
})


var People = mongoose.model('People', schema);


function show() {
        People.find({}, function (err, People) {
            if (err) console.log(err);
            console.log("People find yes");
            console.log(People);
        });
}

function sub(UserId, UserSub)
{
        People.findOne({_id: UserId}, function (err, People) {
            console.log(People);
            console.log("People find");
            People.subscribed.push(UserSub);
            People.save(function(err, user, affected) {
                if (err) console.log(err);
                console.log("emm");
                console.log(People);
            });
        });
}

function unsub(UserId, unSubscribe){
    People.findOne({_id: UserId}, function (err, People) {
        console.log(People);
        console.log("People find");

        var num = People.subscribed.indexOf(unSubscribe);
        console.log(num);
        People.subscribed.splice(num, 1);
        console.log(People);

        People.save(function(err, user, affected) {
            if (err) console.log(err);
            console.log("emm");
            console.log(People);
        });/**/
    });
}

module.exports.unsub = unsub;
module.exports.show = show;
module.exports.sub = sub;
exports.People = mongoose.model("People", schema);