let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let routes = require("./artikel/routes")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/kedainode',{useNewUrlParser:true});
var db = mongoose.connection;

var port = process.env.PORT || 3600;
app.get('/', (req, res) => res.send('Backend KedaiNode'));

app.use('/api', routes)

app.listen(port, function () {
    console.log("Server run on port " + port);
});