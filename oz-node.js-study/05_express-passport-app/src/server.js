const cookieSession = require('cookie-session');
const express = require('express');
const {default : mongoose} = require('mongoose');
const path =require('path');
const passport = require('passport');
const app = express();
const User = require('./models/users.model' );
const { checkAuthenticated, checkNotAuthenticated } = require('./middlewares/auth');

const cookieEncryptionKey = 'supersecret-key';

app.use(cookieSession({
    name : 'cookie-session-name',
    keys: [cookieEncryptionKey]
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
mongoose.connect(`mongodb+srv://oz-study:oz1234@express-cluster.gslf5b6.mongodb.net/?retryWrites=true&w=majority&appName=express-cluster`) //mongo사이트에서 connect url가져옴
    .then(()=>{
        console.log('mongodb connected');
    })
    .catch((err)=>{
        console.log(err)
    })

app.use('/static',express.static(path.join(__dirname,'../public')));  //그냥 public으로 했을때 home화면으로 안넘어갔음..

app.get('/',checkAuthenticated,(req,res)=>{
    res.render('index');
})

app.get('/login',checkNotAuthenticated,(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res,next)=>{
    passport.authenticate("local",(err,user, info)=>{
        if(err){
            return next(err);
        }

        if(!user){
            return res.json({msg:info});
        }

        // 로그인세션
        req.logIn(user, function(err){
            if(err) {return next(err);}
            res.redirect('/');
        })
    })(req,res,next)
})

app.post('/logout',(req,res,next)=>{
    req.logOut(function(err){
        if(err){return next(err);}
        res.redirect('/login');
    })
})

app.get('/signup',checkNotAuthenticated,(req,res)=>{
    res.render('signup')
})

app.post('/signup',async (req,res)=>{
    //유저 객체 생성
    const user = new User(req.body);
    try {
        //유저 컬렉션에 유저를 저장함
        await user.save();
        return res.status(200).json({
            success : true,
        })
    } catch (error) {
        console.error(error);
    }
})

const port = 4000;
app.listen(port,() =>{
    console.log(`Listening on ${port}`)
})