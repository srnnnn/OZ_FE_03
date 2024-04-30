const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        minLength : 5
    },
    googleId : {
        type : String,
        unique : true,
        sparse : true  //에러방지.. (이메일 로그인하면 구글아이디에는 null값이 들어감 후에 구글로 로그인하면 구글아이디가 들어가고 다시 이메일로그인하면 구글은 null값을가지면서 에러가 발생...?ㅜ)
    }
})

const saltRounds = 10;
userSchema.pre('save',function(next){
    let user = this;
    //  비밀번호가 변경될 때만
    if(user.isModified('password')){
        //salt를 생성
        bcrypt.genSalt(saltRounds, function(err,salt){
            if(err) return next(err);
            
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    }
})

userSchema.methods.comparePassword = function (plainPassword, cb){
    //bcrypt compare 비교
    // plainpassword -> 클라이언트에서 온 번호
    //this.password -> 데이터베이스에 있는 번호
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}

const User =mongoose.model('User',userSchema); //모델생성

module.exports = User;