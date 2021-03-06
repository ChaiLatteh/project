let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');
var sessionConfig = {
  secret:"thisissecret",
  resave:false,
  saveUninitialized: true,
  name:'myCookie',
  cookie:{
    secure:false,
    httpOnly:false,
    maxAge:3600000
  }
}

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(express.static(path.join(__dirname, 'public', 'static')));


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function (req, res){
  res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(6789, () => console.log("Server is listening on port 6789"));
