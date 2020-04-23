var express = require('express');
var app = express();
var PORT = process.env.PORT || 3005;
var m = require('./midddleware');
app.use(m.middleware.logger);

app.get('/about',m.middleware.requireAuthentication,function(req,res){
    res.send('Express working!')
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
    console.log('Express server started on PORT: '+ PORT);
});