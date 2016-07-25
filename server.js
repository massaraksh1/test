var express = require('express');
var mongoose = require('mongoose');
var connect = require('connect');
var path = require('path');
var config = require('config');
var router = require('./router/index');
var People = require('class/people');
var regs = require('./router/regs');
var mess = require('./router/mess');
var mail = require('./libs/email');
var messToMail = require('./router/messToMail');
var message = require('./class/message').Mess;
var dbConnect = require('./dbConnect');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();



function start()
{
    dbConnect.startDB();
    //dbConnect.dropDB();

    app.use(bodyParser.json());

    app.use(cookieParser());
    //var MongoStore = require('connect-mongo')(session);
    app.use(session({
        secret: config.get("session:secret"),
        key: config.get("session:key"),
        cookie: config.get("session:cookie"),
        resave: true,
        saveUninitialized: true
        //store: new MongoStore({'localhost': 'test'})
        //store: new MongoStore({mongoose_connection: mongoose.mongoose_connection})
    }));


    /*
     app.use(function(req, res, next) {
     req.session.numberOfVisits = req.session.numberOfVisits + 1 | 1;
     res.send("Visits: " + req.session.numberOfVisits);
     })
     */


    //regs.regUser("massaraksh12", "gogogo");
    //mess.newmess("57952cd54ba719155529267e", "server");

    //People.sub('massaraksh12', 'massaraksh2');
    //People.unsub('massaraksh12', 'massaraksh1');

    //People.show();

    messToMail.messToMail('5794f9dbabae498b478e21c1', 'massaraksh2')

    //mail.mail();

    /*
     message.find({Userid: '57952cd54ba719155529267e'}, function (err, message) {
     if (err) console.log(err);
     console.log("message find yes");
     console.log(message);
     });
     */
    router.route(app);
    app.listen(config.get('port'), function(){
        console.log('Express listening on port ' + config.get('port'));

    })


}



module.exports.start = start;