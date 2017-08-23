var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var Provider = require('react-redux').Provider;
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var webpack = require('webpack');
var config = require('./webpack.config');
var helmet = require('helmet');
var uuid = require('node-uuid')



var db = 'app';

// Load environment variables from .env file
dotenv.load();

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// Models
var User = require('./models/User');

// Controllers
var userController = require('./controllers/user');
var customerController = require('./controllers/customer');
var deviceController = require('./controllers/device');
var noteController = require('./controllers/note');

// React and Server-Side Rendering
var routes = require('./app/routes');
var configureStore = require('./app/store/configureStore').default;

var app = express();

var compiler = webpack(config);

mongoose.connect('mongodb://localhost:27017/' + db);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
// view engine setup
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet.noCache('max-age=5184000', 'no-store', 'no-cache','must-revalidate', 'proxy-revalidate'));
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(function (req, res, next) {
  res.locals.nonce = uuid.v4()
  console.log(res.locals.nonce);
  next()
})
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://www.google-analytics.com/analytics.js'],
    styleSrc: ["'self'", , "'unsafe-inline'", 'fonts.googleapis.com', 'google-analytics.com/analytics.js'],
    fontSrc: ["'self'", 'fonts.googleapis.com', 'http://fonts.gstatic.com'],
    imgSrc: ["'self'", 'https://www.google-analytics.com/', 'gravatar.com'],
    connectSrc: ["'self'"],
    objectSrc: ["'self'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"],
  },
  upgradeInsecureRequests: true,
  loose: false,
}));
app.use(helmet.dnsPrefetchControl({allow: false}));
app.use(helmet.hidePoweredBy({ setTo: 'PHP 10' }));
app.use(helmet.hsts({ maxAge: 5184000 /* 60 de zile */ }))
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
// app.use(helmet.hpkp());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));

app.use(function(req, res, next) {
  req.isAuthenticated = function() {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();
    User.findById(payload.sub, function(err, user) {
      req.user = user;
      next();
    });
  } else {
    next();
  }
});

if (app.get('env') === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
app.post('/api/customers/:id/devices/:did/AddNote', noteController.notePut);
app.get('/api/customers/:id/devices/:did/notes', noteController.noteGet);

app.get('/api/customers/:id/devices/:did', deviceController.deviceIdGet);
app.get('/api/customers/:id/devices', deviceController.devicesGet);
app.post('/api/customers/:id/addDevice', deviceController.devicePost);
app.get('/api/customers/:id/devices/:did/print', deviceController.devicePrint);
app.patch('/api/customers/:id/devices/:did/printing', deviceController.devicePrinting);

app.get('/api/customers/:id', customerController.customerId);
app.get('/api/customers', customerController.customersGet);
app.post('/api/customers', customerController.customerPost);

app.put('/account', userController.ensureAuthenticated, userController.accountPut);
app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
app.post('/signup', userController.signupPost);
app.post('/login', userController.loginPost);
app.post('/forgot', userController.forgotPost);
app.post('/reset/:token', userController.resetPost);
app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);

// React server rendering
app.use(function(req, res) {
  var initialState = {
    auth: { token: req.cookies.token, user: req.user },
    messages: {}
  };

  var store = configureStore(initialState);

  Router.match({ routes: routes.default(store), location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Provider, { store: store },
        React.createElement(Router.RouterContext, renderProps)
      ));
      var page = nunjucks.render('layout.html', { html: html, initialState: JSON.stringify(store.getState()) });
      res.status(200).send(page);
    } else {
      res.sendStatus(404);
    }
  });
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
