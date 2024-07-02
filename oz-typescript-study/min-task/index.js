// function menu(info, callback) {
//   setTimeout(() => {
//     console.log(`오늘의 메뉴는 ${info} 제육볶음 입니다`);
//     callback();
//   }, 2000);
// }

// menu("갓 나온", () => {
//   menu("조금 식은", () => {
//     menu("조금 더 식은", () => {});
//   });
// });

function menu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("오늘의 메뉴는 제육볶음 입니다");
      resolve("오늘의 메뉴는 제육볶음 입니다");
    }, 2000);
  });
}

function menu2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("오늘의 메뉴는 식은 제육볶음 입니다");
      resolve("오늘의 메뉴는 식은 제육볶음 입니다");
    }, 2000);
  });
}

function menu3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("오늘의 메뉴는 더 식은 제육볶음 입니다");
      resolve("오늘의 메뉴는 더 식은 제육볶음 입니다");
    }, 2000);
  });
}

// menu().then(menu2).then(menu3);

menu()
  .then((info) => {
    console.log(info);
    return (result = menu2());
  })
  .then((info) => {
    console.log(info);
    return (result = menu3());
  })
  .then((info) => {
    console.log(info);
  });
