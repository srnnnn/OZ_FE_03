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
// import 로 userManagement에 작성한 addUserAsync, printAllUsersAsync함수를 불러오세요.
/* 이 곳에 코드를 작성하세요. */
const userManagement_1 = require("./userManagement");
// 메인 함수, 비동기 처리를 위해 async 함수로 정의
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // 새로운 사용자 추가
        const newUser = {
            id: 1,
            username: "john_doe",
            email: "john@example.com",
            age: 30,
            isAdmin: false,
        };
        yield (0, userManagement_1.addUserAsync)(newUser); // 비동기 함수 호출, 완료될 때까지 대기
        // 다른 사용자 추가
        const anotherUser = {
            id: 2,
            username: "jane_smith",
            email: "jane@example.com",
            age: 25,
            isAdmin: true,
        };
        yield (0, userManagement_1.addUserAsync)(anotherUser); // 비동기 함수 호출, 완료될 때까지 대기
        // 모든 사용자 출력 (비동기)
        yield (0, userManagement_1.printAllUsersAsync)(); // 비동기 함수 호출, 완료될 때까지 대기
    });
}
// 메인 함수 실행
main();
