var mongoose = require('mongoose');
var config = require('config');

function startDB(callback)
{
    mongoose.connect(config.get("mongoose:uri"));
    console.log("DB connecting");
    if (callback)
        callback();
}

function dropDB()
{
    mongoose.connect(config.get("mongoose:uri"),function(){
        function drop(callback){
            mongoose.connection.db.dropDatabase();
            callback();
        }
        function disconnect(){
            mongoose.disconnect();
        }
        drop(disconnect);
    });

}


module.exports.startDB = startDB;
module.exports.dropDB = dropDB;