var people = require('../class/people');

exports.post = function(req, res, next)
{
    var userId = req.body.userId;

    if (req.body.subscribe) {
        var subscribe = req.body.subscribe;
        people.sub(userId, subscribe);
        res.json();
    }
    else if(req.body.unsubscribe) {
        var unSubscribe = req.body.unSubscribe;
        people.unsub(userId, unSubscribe);
        res.json();
    }

};

