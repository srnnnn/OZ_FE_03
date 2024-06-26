"use strict";
//문자열 타입 string
const a = "";
const b = "";
const c = ``;
let myName = "스티브";
let msg = `Hello ${myName}`;
myName.toLocaleLowerCase();
// msg = 123 //숫자 불가능
console.log(msg);
//숫자타입 number
let n = 100;
// n = "100" //문자열 불가능
// n.toUpperCase(); //문자열 메소드역시 불가능
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let avg = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("열렸다!");
}
if (isCompleted) {
    console.log("성공못함");
}
let isAvailable = isOpen && !isCompleted;
console.log(isAvailable);
//null
let user = null;
function login(userName) {
    user = userName;
    console.log("로그인한 사람: " + user);
}
function logout() {
    user = null;
    console.log("로그아웃");
}
login("조이");
logout();
