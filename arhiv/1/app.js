var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
//var errorhandler = require('errorhandler')

var app = express();

http.createServer(app).listen(config.get('port'), function(){
    console.log('Express listening on port ' + config.get('port'));
})



function errorHandler(err, req, res, next) { //    Своя функция ошибок
    console.log(err);
    res.send(500, String(err));
}




//Middleware
app.use(function(req, res, next){
    if (req.url =='/')  //       проверяем путь
    {
        res.end("Hello");    //ответ на запрос (выведется на экран)
    }
    else
    {
        next(); //        функция передает управлениу следующему app.use
    }
})

app.use(function(req, res, next){
    if (req.url =='/gogogo')  //       проверяем путь
    {
        next(new Error("wops, denied"));  //      если у next() есть аргумент, то упраление передается на обработчик ошибок
    }
    else
    {
        next(); //        функция передает управлениу следующему app.use
    }
})

app.use(function(req, res){
    res.send(404, "Good by");  //   посылает клиенту что угодно) в данном случае посылает статус 404 и сообщение
})

app.use(function(err, req, res, next){  // если приходит 4 аргумента, то это обработчик ошибок
    // NODE_ENV = 'prodaction'
    if (app.get('env') == 'development')
    {
        errorHandler(err, req, res, next);
    }
    else
    {
        res.send(500);
    }
})