"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = addUser;
exports.printAllUsers = printAllUsers;
exports.addUserAsync = addUserAsync;
exports.printAllUsersAsync = printAllUsersAsync;
// 사용자 목록을 저장할 배열
let users = [];
// 사용자 추가 함수
function addUser(user) {
    users.push(user);
}
// 모든 사용자를 출력하는 함수
function printAllUsers() {
    console.log(users);
}
// 1초 지연 후 사용자가 추가되는 비동기 사용자 추가 함수인 addUserAsync함수를 작성해주세요. 힌트: setTimeout을 사용하세요.
/* 이 곳에 코드를 입력하세요.*/
function addUserAsync(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                addUser(user);
                resolve();
                console.log(users);
            }, 1000);
        });
    });
}
//1초 지연 후 사용자가 추가되는 비동기 사용자 출력 함수인 printAllUsersAsync함수를 작성해주세요. 힌트: setTimeout을 사용하세요.
/* 이 곳에 코드를 입력하세요.*/
function printAllUsersAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                printAllUsers();
                resolve();
            }, 1000);
        });
    });
}
