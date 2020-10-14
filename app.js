require("dotenv").config();
require("./config/mongo");

// const createError = require('http-errors');
// const cookieParser = require('cookie-parser');
// const path = require('path');

const express = require('express');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const morganLogger = require('morgan');
const cors = require('cors')

const app = express();

// JSON POST
app.use(express.json());

// VIEW ENGINE setup
app.set('view engine', 'jade');

// CORS
app.use(cors());

// API CALL LOGGIN
app.use(morganLogger('dev'));
app.use(express.urlencoded({ extended: false }));
// SESSION SETUP
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: 60000 }, // in millisec
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60, // 1 day
      }),
      saveUninitialized: true,
      resave: false,
    })
);

// app.set('views', path.join(__dirname, 'views'));

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/project', require('./routes/project'));
app.use('/sequencer', require('./routes/sequencer'));
app.use('/synth', require('./routes/synth'));
app.use('/sequence', require('./routes/sequence'));
app.use('/effect', require('./routes/effect'));
app.use('/sample', require('./routes/sample'));
app.use('/auth', require('./routes/auth'));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
