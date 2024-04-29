const cookieParser = require('cookie-parser');
const express  = require('express'); 
const jwt = require('jsonwebtoken');

const app = express();
const secretText = 'superSecret';
const refreshSecretText = 'supersuperSecret';

const posts = [
    {
        username : "Jun",
        title : "Post 1"
    },
    {
        username : "Hanni",
        title : "Post 2"     
    } 
]
let refreshTokens = [];

app.use(express.json());
app.use(cookieParser());

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user = {name : username};

    //jwt이용해서 토큰생성하기  payload + secretText
    //유효기간 추가
    const accessToken = jwt.sign(user, secretText, {expiresIn : '30s'});

    //jwt를 이용해서 refresh token도 생성
    const refreshToken = jwt.sign(user, refreshSecretText, {expiresIn : '1d'});

    refreshTokens.push(refreshToken);

    //refreshToken을 쿠키에 넣기
    res.cookie('jwt', refreshToken,{
        httpOnly : true,
        maxAge : 24*60*60*1000
    })

    res.json({accessToken : accessToken});
})

app.get('/posts',authMiddleware, (req, res)=>{
    res.json(posts);
})

function authMiddleware(req,res,next){
    // 토큰을 requestHeader에서 가져오기
    const authHeader = req.headers['authorization'];
    // Baarer ajfajkfldsa.adfjlajf.alksdfjksadfj 토큰이 온 것
    const token = authHeader && authHeader.split(' ')[1];  //받은 토큰을 공백기준으로 자르고 뒤에 값 가져오기
    if(token == null) return res.sendStatus(401);

    //토큰이 있으니 유요한 토큰인지 확인
    jwt.verify(token, secretText, (err, user) => {
        if(err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
}

app.get('/refresh',(req,res)=>{
    //cookies 가져오기 cookie-parser
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(403);

    const refreshToken = cookies.jwt;
    //refreshToken이 데이터베이스에 있는 토큰인지 확인
    if(!refreshToken.includes(refreshToken)){
        return res.sendStatus(403);
    }
    //token이 유요한 토큰인지 확인
    jwt.verify(refreshToken, refreshSecretText, (err,user)=>{
        if(err) return res.sendStatus(403);
        //accessToken을 생성하기
        const accessToken = jwt.sign({name:user.name}, secretText, {expiresIn:'30s'})
        res.json({accessToken});
    })

})

const port = 4000;
app.listen(port, () => {
    console.log('연결된 포트는 '+port)
})