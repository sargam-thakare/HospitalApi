const express = require('express')
 
const path = require('path')
const app = express();
const db = require('./config/database')
const port = 8080
const passport=require('passport');
const passportjwt=require('./config/jwt-token-strategy');
const bodyParser = require('body-parser');

const session = require('express-session');

app.use(bodyParser.json());
   
app.use(express.urlencoded({
    extended: true
  }));
 
app.set('view engine', 'ejs')
app.set('views', './views')

 app.use(session({
    name: 'codeial',
     secret: 'blahsomething',
    saveUninitialized: false,
    resave: true,   
}));

app.use(passport.initialize());
app.use(passport.session());

 
app.use('/', require('./routes'));

app.listen(port, function () {
    console.log("server is running on port 8080 ")
})


