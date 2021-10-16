var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())


require('./router/router.js') (app);

const db = require('./config/db.config.js');

const Role = db.role;



var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address.port

    console.log("App listening at http://%S:%S", host, port)
})