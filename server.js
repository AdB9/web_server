var express = require('express');
var app = express();
var port = 3005;
var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        var date = new Date().toString();
        console.log('Request: '+ req.method + ' ' + req.originalUrl + ' ' + date);
        next();
    }
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('Called you Mine!')
});

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log('Express server started on port: '+ port);
});