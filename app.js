var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(app);
server.listen(3000, function () {
  console.log(' app listening on port 3000!');
});

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//var http = require('http');
var routes = require('./routes/index');
//casandra

app.use(express.static(__dirname + '/src'));

// view engine setup
app.set('views', __dirname + '/src');
//app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.use('/', routes);
app.get('/', function(req, res, next) {
  res.render('/index.html');
});

app.post('/quotes', function(req, res) {
  db.collection('quotes').save(req.body,function (err, result) {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

/*
var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

var thor = new Movie({
  title: 'Thor'
, rating: 'PG-13'
, releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
, hasCreditCookie: true
});

thor.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
// Find a single movie by name.
Movie.findOne({ title: 'Thor' }, function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});

// Find all movies.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

// Find all movies that have a credit cookie.
Movie.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});*/
app.get('/', function(req, res, next) {
  res.sendFile(__dirname+"/index.html")
});
app.get('/rr', function(req, res, next) {
  res.sendFile(__dirname+"/index.html")
});
app.post('/quotes',function (req, res) {
  console.log('Hellooooooooooooooooo!');
    console.log(req.body);
  res.redirect(__dirname+"/index.html")
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
