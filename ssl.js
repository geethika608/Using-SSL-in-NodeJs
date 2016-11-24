var fs = require('fs');

//Add Your Ip address/Domain Specific files here..
var privateKey = fs.readFileSync('../ssl/keys/Your Private Key.key').toString();
var certificate = fs.readFileSync('../ssl/certs/Your Crt File.crt').toString();
var options = {
    key: privateKey,
    cert: certificate
};
//Create your appserver here.
var https = require('https').createServer(options, app);

app.get('/', function (req, res) {
    res.end("SSL is Verified");

});

https.listen(3000, 'Your Ip Address', function () {
    console.log('listening on *:3000');
});