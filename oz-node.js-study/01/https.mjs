// const { send } = require('./request.js'); //require안에 확장자 안넣으면 js, json, node순으로 인식함
// const { read } = require('./response.js');

import { send } from'./request.mjs'; //require안에 확장자 안넣으면 js, json, node순으로 인식함
import { read } from './response.mjs';

function makeRequest(url, data){
    //요청 보내기
    send(url,data)

    //데이터 리턴하기
    return read();
    
}
const responseData = makeRequest('https//naver.com','any data');
console.log(responseData); 