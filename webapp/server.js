var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});

app.get('/items', function(request, response){
    response.send("This function will return a list of all stored items");
});

app.post('/items', function(request, response){
    response.send("This function will create a list of all stored items");
});

app.put('/item', function(request, response){
    response.send("This function will add to the list of all stored items");
});

app.delete('/item', function(request, response){
    response.send("This function will delete an item from a list of all stored items");
});

app.delete('/items', function(request, response){
    response.send("This function will delete all stored items");
});
