var express = require('express');
var app = express();

app.get('/',function (req,res){
    res.end("This is simple get request");
})


app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});