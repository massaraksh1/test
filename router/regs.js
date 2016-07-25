var dbConnect = require('../dbConnect');
var people = require('../class/people');
var mongoose = require('mongoose');
var async = require('async');
var config = require('config');



exports.post = function(req, res, next)
{
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.json(req.body)
    regUser(username, password);

}


function regUser(name, password)
{
    var user = new people.People({
        username: name,
        password: password,
        subscribed: [],
        subscrib: []
    });
    console.log("user " + name + " go to add");
    savePeople(user);
    console.log("user add");
}

function savePeople(user)
{
    console.log("start save People");
    user.save(function(err, user, affected){
        // вызов обработчика ошибок, на случай если они есть
        if (err)
            console.log(err);
        else
        {
            console.log("people save");
        }

    })
}

module.exports.regUser = regUser;