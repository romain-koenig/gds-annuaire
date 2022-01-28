import express from 'express'
import path from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import logger from 'morgan'

import indexRouter from './routes/index'
import sampleRouter from './routes/sample'

const PORT = process.env.PORT || 3000

const init = async () => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({
    extended: true,
  }))
  app.use(cookieParser())
  
  // view engine setup
  app.set('view engine', 'pug')
  app.set('views', path.join(__dirname, 'views'))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(logger('dev'));

  indexRouter(app)
  sampleRouter(app)

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

// Start
const server = app.listen(PORT, () => console.log(`Server launch on port ${PORT}`))
// const io = notifyUtils.socketApi.io
// io.attach(server)

// io.on('connection', (socket) => {
//   console.log('HELLO IO!')
// })

}

init()