


function route(app)
{
    app.get('/', require('./default').get);

    app.post('/login', require('./auth').post);

    app.post('/reg', require('./regs').post);

    app.post('/subscribe', require('./subscribe').post);

    //app.post('/messtomail', require('./messToMail').post);

    app.get('/user/:name', require('./users').get);

    app.post('/user/:name', require('./mess').post);

    console.log("rout yes");
}
/*
app.use(function(req, res, next) {
    res.send("хаха");
})
*/
module.exports.route = route;