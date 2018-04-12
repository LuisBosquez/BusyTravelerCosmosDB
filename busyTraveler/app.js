var express = require('express');
var app = express();

console.log("Starting Express application.")

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/home', function(req, res){
    res.render('home', {
        user: {name: "Luis", age: 26}
    });
 });

app.listen(3000);