const express = require('express');
const passport = require('passport');
const usersRouter = express.Router();
const User = require('../models/users.model');
const sendMail = require('../mail/mail');

usersRouter.post('/login',(req,res,next)=>{
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

usersRouter.post('/logout',(req,res,next)=>{
    req.logOut(function(err){
        if(err){return next(err);}
        res.redirect('/login');
    })
})

usersRouter.post('/signup',async (req,res)=>{
    //유저 객체 생성
    const user = new User(req.body);
    try {
        //유저 컬렉션에 유저를 저장함
        await user.save();
        //이메일 보내기
        // sendMail('tpfla@example.com','serim','welcome');
        sendMail(user.email,user.email,'welcome');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
    }
})

usersRouter.get('/google',passport.authenticate('google'));

usersRouter.get('/google/callback', passport.authenticate('google',{
    successReturnToOrRedirect : '/',
    failureRedirect :'/login',
}))

usersRouter.get('/kakao',passport.authenticate('kakao'));

usersRouter.get('/kakao/callback',passport.authenticate('kakao',{
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
}))

module.exports=usersRouter;