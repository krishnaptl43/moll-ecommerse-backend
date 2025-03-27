const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product');
const { verifyToken } = require('./config/tokenManager');
const ApiResponse = require('./api-response/response');
const protectedRoute = require('./routes/protectedRoute');
const countModel = require('./models/count');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static('uploads'));

app.use('/', indexRouter);
app.post('/count', async (req, res) => {
  const { name } = req.body
  try {
    let result = await countModel.create({ name })
    if (!result) {
      res.json(new ApiResponse(false, null, "not done"))
    }

    res.json(new ApiResponse(true, result, "success"))
  } catch (error) {
    res.json(error)
  }
});
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.use('/v1', (req, res, next) => {
  let { status } = verifyToken(req)
  if (status) {
    next()
  } else {
    res.json(new ApiResponse(false, null, "this is proctected route"))
  }
});
app.use('/v1', protectedRoute);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
