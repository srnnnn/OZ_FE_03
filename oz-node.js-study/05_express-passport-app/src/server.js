const cookieSession = require('cookie-session');
const express = require('express');
const {default : mongoose} = require('mongoose');
const path =require('path');
const passport = require('passport');
const app = express();
const User = require('./models/users.model' );

const config = require('config');
const mainRouter = require('./routes/main.router');
const usersRouter = require('./routes/users.router');
const serverConfig = config.get('server');

const port = serverConfig.port;


require('dotenv').config();


app.use(cookieSession({
    name : 'cookie-session-name',
    keys: [process.env.COOKIE_ENCRYPTION_KEY]
}));

// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(express.json());
app.use(express.urlencoded({extended:false})) //폼태그에 액션으로 경로 지정해주면 백엔드에서 값을 받을때 필요함 (폼안에있느걸 분석해서 파싱해서 가져오기위함)

// view engine setup
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs');

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URI) //mongo사이트에서 connect url가져옴
    .then(()=>{
        console.log('mongodb connected');
    })
    .catch((err)=>{
        console.log(err)
    })

app.use('/static',express.static(path.join(__dirname,'../public')));  //그냥 public으로 했을때 home화면으로 안넘어갔음..

app.use('/',mainRouter);
app.use('/auth',usersRouter);

app.listen(port,() =>{
    console.log(`Listening on ${port}`)
})