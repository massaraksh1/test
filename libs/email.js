var nodemailer = require('nodemailer');
var sendMailTransport = require('nodemailer-sendmail-transport');


function mail(adress, mess, subName){
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(sendMailTransport({}));

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: '<test@tester.com>', // sender address
        to: adress, // list of receivers
        subject: 'Cообщениt пользователя ' + subName, // Subject line
        text: mess, // plaintext body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            return console.log(err);
        }
        console.log('Message sent: ' + res.response);
    });
}


module.exports.mail = mail;