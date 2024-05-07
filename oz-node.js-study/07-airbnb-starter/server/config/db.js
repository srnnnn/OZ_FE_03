const mongoose = require('mongoose');

const connectWithDB = () => {
    mongoose.set('strictQuery',false);
    mongoose
    .connect(process.env.DB_URL)
    .then(console.log(`DB 연결됨`))
    .catch((err)=>{
        console.log(`DB 연결 에러 : ${err}`);
        process.exit(1);
    })
}

module.exports = connectWithDB;