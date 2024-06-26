//문자열 타입 string
const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "스티브";
let msg: string = `Hello ${myName}`;

myName.toLocaleLowerCase();
// msg = 123 //숫자 불가능
console.log(msg);

//숫자타입 number
let n: number = 100;
// n = "100" //문자열 불가능
// n.toUpperCase(); //문자열 메소드역시 불가능

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let avg: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

//boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;
if (isOpen) {
  console.log("열렸다!");
}
if (isCompleted) {
  console.log("성공못함");
}

let isAvailable: boolean = isOpen && !isCompleted;
console.log(isAvailable);

//null
let user: string | null = null;
function login(userName: string) {
  user = userName;
  console.log("로그인한 사람: " + user);
}
function logout() {
  user = null;
  console.log("로그아웃");
}
login("조이");
logout();

//any : 모든 타입을 허용하겠다 / 모든 타입 체크를 우회함 / 특별한일(지금은 타입을 몰라서 임시방편으로 쓰겠다..)이 아니면 최소화
let someValue: any; //타입체크 안함

//다양한 타입의 메소드들 사용가능 타입스크립트를 쓰는 이유가 없어짐
someValue.toString();
someValue = false;
someValue.toFixed();
