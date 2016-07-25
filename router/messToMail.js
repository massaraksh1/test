var People = require('class/people').People;
var message = require('../class/message').Mess;

exports.post = function(req, res, next) {
    var UserId = req.body.UserId;
    var Subscribe = req.body.Subscribe;
}

function messToMail(UserId, Subscribe){
    People.findOne({_id: UserId}, function (err, People) {
        //console.log(People);
        console.log("People find");

        var adress = People.email;
        console.log(People.email);
    });
    People.findOne({username: Subscribe}, function (err, People) {
        //console.log(People);
        console.log("People find");
        var id = People._id;
        console.log(id);
        message.find({Userid: id}, function (err, message) {
            if (err) console.log(err);
            console.log("message find yes");
            var count = message.length-1;
            console.log(count);
            while(count>=0){
                var messs = message[count].Mess;
                console.log(messs);
                count--;
            }

        });

        /*
         People.save(function(err, user, affected) {
         if (err) console.log(err);
         console.log("emm");
         console.log(People);
         });*/
    });
}

module.exports.messToMail = messToMail;