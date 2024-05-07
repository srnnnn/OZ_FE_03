const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const connectWithDB = require('./config/db');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();

const app = express();
 
connectWithDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cookieParser());

app.use(cookieSession({
    name: 'session',
    maxAge: process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_SECRET],
    sameSite: 'none'
}))

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true //쿠키를 위해서
}))

app.use('/', require('./routes'));


app.listen(process.env.PORT || 8000, (err) =>{
    if(err){
        console.log('서버에서 에러 '+ err);
    }
    console.log(`${process.env.PORT} 서버 실행됨`)
})