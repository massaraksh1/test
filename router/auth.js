var async = require('async');
var People = require('class/people').People;

exports.post = function auth(req, res, next)
{
    var username = req.body.username;
    var password = req.body.password;

    async.waterfall([
        function(callback){
            People.findOne({
                username: username,
                password: password
            }, callback);
        },
        function(people, callback) {
            if (people) {
                console.log("people exist");
                callback(null, people);
                // ... 200 OK
            }
            else {
                next(403);
                // ... 403
            }
        }

    ], function(err, people) {
        if (err) {
            res.json(403);
        }
        else {
            req.session.user = people._id;
            console.log("yes");
            next(200);
        }

    })


};

//module.exports.auth = auth;