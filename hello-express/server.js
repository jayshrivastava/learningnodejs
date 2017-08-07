var express = require('express');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('HelloExpress.db');
var app = express();
var port = 3000;

app.get('/quotes', function(request, response){
    db.all("SELECT * FROM Quotes",
    function (err, rows) {console.log("gET Quotes: The database currently contains the following: "
    + rows);

      response.send(rows);

    });
});

app.get(`/quotes/:author`, function(request, response){

   db.all("SELECT * FROM Quotes WHERE Author = ?", [request.params.author], function(err, rows){
        console.log("GET Request for author: " + request.params.author);

        response.send(rows);
    });
});

app.post('/quotes', function(request, response) {
    db.run("INSERT INTO Quotes VALUES ?", req.body)
});

app.listen(port, function(){
    console.log("Express app listening on port " + port);
});
