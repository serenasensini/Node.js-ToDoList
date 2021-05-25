let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');
let app = express();

let apiRoutes = require("./routes/api-routes");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin: ['http://pippo']}))


// test locale
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true});


var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running webapp on port " + port);
});
