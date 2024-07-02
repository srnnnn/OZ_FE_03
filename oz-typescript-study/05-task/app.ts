import { User } from "./types";
// import 로 userManagement에 작성한 addUserAsync, printAllUsersAsync함수를 불러오세요.
/* 이 곳에 코드를 작성하세요. */
import { addUserAsync, printAllUsersAsync } from "./userManagement";

// 메인 함수, 비동기 처리를 위해 async 함수로 정의
async function main() {
  // 새로운 사용자 추가
  const newUser: User = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    age: 30,
    isAdmin: false,
  };
  await addUserAsync(newUser); // 비동기 함수 호출, 완료될 때까지 대기

  // 다른 사용자 추가
  const anotherUser: User = {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    age: 25,
    isAdmin: true,
  };
  await addUserAsync(anotherUser); // 비동기 함수 호출, 완료될 때까지 대기

  // 모든 사용자 출력 (비동기)
  await printAllUsersAsync(); // 비동기 함수 호출, 완료될 때까지 대기
}

// 메인 함수 실행
main();
