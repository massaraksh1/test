var mess = require('../class/message').Mess;
var People = require('class/people').People;

exports.post = function(req, res, next)
{
    var UserId = req.body.UserId;
    var message = req.body.Password;

    newmess(UserId, message);
}

function newmess(UserId, message) {
    People.findOne({_id: UserId}, function (err, People) {
        console.log(People);
        console.log("People find");

        var NewMess = new mess({
            Userid: UserId,
            Mess: message
        });

        console.log("Mess add");

        NewMess.save(function(err, user, affected){
            // вызов обработчика ошибок, на случай если они есть
            if (err)
                console.log(err);
            else
            {
                console.log("mess save");
            }

        })

    });
}

module.exports.newmess = newmess;