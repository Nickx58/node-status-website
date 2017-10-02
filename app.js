var express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render('index');
})

app.get('/products',function(req,res){
    res.render('contact');
})

app.listen(port,function(){
    console.log("Server Started");
});